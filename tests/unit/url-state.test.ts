import { describe, expect, it } from 'vitest';
import type { FormState } from '../../src/ui/form';
import { formToSearch, readForm, readLang, withLang } from '../../src/ui/urlState';

const ids = ['tokyo', 'taipei'];
const form: FormState = {
  cityId: 'taipei', visitDate: '2026-11-04', nights: '3', adults: '2', children: '1', style: 'comfort',
  currency: 'EUR', flight: '', lodging: '', directCurrency: 'EUR', attractions: [], drinks: false, airport: '', airportTrips: '2', rental: '', rentalDays: '',
  transportMode: 'auto', ridesPerDay: '3', transitDays: '', passId: '', mealsPerDay: '', mustEat: [],
};

describe('URL 입력 상태', () => {
  it('쿼리로 쓰고 다시 읽으면 같은 입력이 된다(언어·통화는 별도 값)', () => {
    const search = formToSearch(form, 'en');
    expect(readLang(search)).toBe('en');
    expect(readForm(search, ids)).toEqual({ cityId: 'taipei', visitDate: '2026-11-04', nights: '3', adults: '2', children: '1', style: 'comfort', currency: 'EUR' });
  });
  it('직접 입력 금액이 있으면 금액과 입력 통화도 담는다', () => {
    const search = formToSearch({ ...form, flight: '500000', directCurrency: 'KRW' }, 'ko');
    expect(readForm(search, ids)).toMatchObject({ flight: '500000', directCurrency: 'KRW' });
  });
  it('형식이 틀린 값은 버린다', () => {
    expect(readForm('?city=atlantis&style=lux&cur=<x>&date=tomorrow&nights=abc&dcur=ko', ids)).toEqual({});
    expect(readLang('?lang=fr')).toBeNull();
    expect(readForm('?cur=jpy', ids)).toEqual({ currency: 'JPY' });
  });
  it('공항 이동·렌터카는 고른 경우에만, 기본값(왕복·숙박 수)이 아닌 횟수·일수만 담는다', () => {
    expect(formToSearch({ ...form, airportTrips: '1', rentalDays: '5' }, 'ko')).not.toMatch(/apt|car/);
    const search = formToSearch({ ...form, airport: 'TYO-AP-001', airportTrips: '1', rental: 'JEJ-RC-002', rentalDays: '4' }, 'ko');
    expect(readForm(search, ids)).toMatchObject({ airport: 'TYO-AP-001', airportTrips: '1', rental: 'JEJ-RC-002', rentalDays: '4' });
    expect(formToSearch({ ...form, airport: 'TYO-AP-001' }, 'ko')).not.toContain('aptw');
    expect(readForm('?apt=<script>&car=x&aptw=1&cardays=999', ids)).toEqual({});
  });
  it('언어만 바꿀 때 다른 쿼리는 보존한다', () => {
    expect(withLang('?city=tokyo&lang=ko', 'en')).toBe('?city=tokyo&lang=en');
  });
});

describe('페이지 주소', () => {
  it('도시 가이드는 있는 도시만, 나머지는 계산기', async () => {
    const { routeOf, routePath } = await import('../../src/ui/pages');
    expect(routeOf('/guide/tokyo', ['tokyo'])).toEqual({ page: 'guide', cityId: 'tokyo' });
    expect(routeOf('/guide/tokyo.html', ['tokyo'])).toEqual({ page: 'guide', cityId: 'tokyo' });
    expect(routeOf('/guide/atlantis', ['tokyo'])).toEqual({ page: 'calculator' });
    expect(routeOf('/guides/', ['tokyo'])).toEqual({ page: 'guides' });
    expect(routePath({ page: 'guide', cityId: 'paris' })).toBe('/guide/paris');
  });
  it('자세히 설정(교통 방식·횟수·일수·이용권·끼니·꼭 먹을 음식)은 기본값이 아닐 때만 담고 다시 읽힌다', () => {
    expect(formToSearch(form, 'ko')).not.toMatch(/tm=|rpd=|tdays=|pass=|meals=|eat=/);
    const search = formToSearch(
      { ...form, transportMode: 'pass', passId: 'TYO-TR-003', transitDays: '3', mealsPerDay: '2', mustEat: [{ name: '라멘~|', price: '1500' }, { name: '규동', price: '450', sampleId: 'TYO-FD-001' }] },
      'ko',
    );
    expect(readForm(search, ids)).toMatchObject({
      transportMode: 'pass', passId: 'TYO-TR-003', transitDays: '3', mealsPerDay: '2',
      mustEat: [{ name: '라멘  ', price: '1500' }, { name: '규동', price: '450', sampleId: 'TYO-FD-001' }],
    });
    expect(readForm(formToSearch({ ...form, transportMode: 'rides', ridesPerDay: '5' }, 'ko'), ids)).toMatchObject({ transportMode: 'rides', ridesPerDay: '5' });
  });
});

