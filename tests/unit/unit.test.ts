import { describe, expect, it } from 'vitest';
import samples from '../../src/data/generated/samples.json';
import { localizeUnit } from '../../src/i18n/unit';

describe('영어·일본어 가격 단위', () => {
  it('인원·승차·사이즈 표현을 자연스럽게 잇고 괄호와 분수를 보존한다', () => {
    expect(localizeUnit('en', '성인 1인, 최대 6회 승차')).toBe('1 adult, up to 6 rides');
    expect(localizeUnit('en', '1인 1끼')).toBe('1 person, 1 meal');
    expect(localizeUnit('en', '1잔 (중)')).toBe('1 glass (medium)');
    expect(localizeUnit('en', '1잔 1/2 pint')).toBe('1 glass 1/2 pint');
    expect(localizeUnit('en', '1병(330ml)')).toBe('1 bottle (330 ml)');
    expect(localizeUnit('en', '작은 병 1병')).toBe('1 small bottle');
    expect(localizeUnit('ja', '1잔 (중)')).toBe('1杯（中）');
    expect(localizeUnit('ja', '1병(330ml)')).toBe('1本（330ml）');
    expect(localizeUnit('ja', '작은 병 1병')).toBe('小瓶1本');
  });

  it('현재 가격 표본의 모든 단위에서 한국어 잔여와 깨진 괄호가 없다', () => {
    const units = [...new Set(samples.map((sample) => sample.unit))];
    for (const unit of units) {
      for (const lang of ['en', 'ja'] as const) {
        const translated = localizeUnit(lang, unit);
        expect(translated, `${lang}: ${unit}`).not.toMatch(/[가-힣]/);
        expect((translated.match(/\(/g) ?? []).length, `${lang}: ${unit}`).toBe((translated.match(/\)/g) ?? []).length);
      }
    }
  });
});
