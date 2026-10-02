import { describe, expect, it } from 'vitest';
import type { FormState } from '../../src/ui/form';
import { formToSearch, readForm, readLang, withLang } from '../../src/ui/urlState';

const ids = ['tokyo', 'taipei'];
const form: FormState = {
  cityId: 'taipei', visitDate: '2026-11-04', nights: '3', adults: '2', children: '1', style: 'comfort',
  currency: 'EUR', flight: '', lodging: '', directCurrency: 'EUR', attractions: [], drinks: false,
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
  it('언어만 바꿀 때 다른 쿼리는 보존한다', () => {
    expect(withLang('?city=tokyo&lang=ko', 'en')).toBe('?city=tokyo&lang=en');
  });
});
