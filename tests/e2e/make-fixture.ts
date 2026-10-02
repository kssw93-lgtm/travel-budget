/**
 * e2e 전용 가격 데이터 생성. 실제 변환 결과(samples.json)에 타이베이 테스트용 표본만 얹어
 * "계산 가능" 도시 흐름을 검증한다. 결과는 .fixture/ 에만 쓰이고 배포 빌드에는 들어가지 않는다.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PriceSample } from '../../src/core/types';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const real = JSON.parse(readFileSync(`${root}/src/data/generated/samples.json`, 'utf8')) as PriceSample[];

const base = real.find((s) => s.id === 'TPE-FD-001') as PriceSample;
const fake = (id: string, patch: Partial<PriceSample>): PriceSample => ({
  ...base,
  id,
  modelUse: 'yes',
  grade: 'A',
  status: '확정 1차',
  sourceName: 'E2E fixture (not real data)',
  sourceUrl: 'https://example.com/e2e-fixture',
  note: 'e2e 테스트용 가짜 표본',
  ...patch,
});

const extra: PriceSample[] = [
  fake('TPE-TEST-FD-1', { category: 'food', subtype: '저가 한끼', nameKo: '테스트 덮밥', nameEn: 'Test rice bowl', min: 90, max: 90, unit: '1그릇' }),
  fake('TPE-TEST-AT-1', { category: 'attraction', subtype: '박물관', nameKo: '테스트 박물관', nameEn: 'Test museum', min: 100, max: 100, unit: '성인 1인' }),
  fake('TPE-TEST-SV-1', { category: 'souvenir', subtype: '식품', nameKo: '테스트 과자', nameEn: 'Test snack box', min: 150, max: 150, unit: '1상자' }),
];

mkdirSync(`${root}/tests/e2e/.fixture`, { recursive: true });
writeFileSync(`${root}/tests/e2e/.fixture/samples.json`, JSON.stringify([...real, ...extra], null, 2));
console.log(`e2e fixture: ${real.length} 실제 표본 + ${extra.length} 테스트 표본`);
