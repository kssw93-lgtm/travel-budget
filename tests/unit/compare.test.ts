import { describe, expect, it } from 'vitest';
import { costComparison } from '../../src/core/compare';
import { cities, dataDate, extras, samples } from '../../src/data';

describe('도시별 경비 비교의 생활 물가 예시', () => {
  it('도쿄의 공식 커피·생수 표본 범위를 현지 통화로 포함한다', () => {
    const tokyo = costComparison(cities, samples, extras, dataDate).find((row) => row.city.id === 'tokyo');
    expect(tokyo?.coffee?.min).toBeGreaterThan(0);
    expect(tokyo?.coffee?.max).toBeGreaterThanOrEqual(tokyo?.coffee?.min ?? 0);
    expect(tokyo?.bottledWater?.min).toBeGreaterThan(0);
    expect(tokyo?.bottledWater?.max).toBeGreaterThanOrEqual(tokyo?.bottledWater?.min ?? 0);
  });
});
