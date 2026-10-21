import { Buffer } from 'node:buffer';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const cards = [
  {
    file: 'og-image-en.png',
    title: 'Travel Budget Calculator',
    line1: 'Pick a city and dates to estimate',
    line2: 'local costs from official prices.',
    label: 'Meals · Transit · Attraction tickets',
    labelWidth: 626,
    titleSize: 68,
    font: 'Arial, sans-serif',
  },
  {
    file: 'og-image-ja.png',
    title: '旅行費用計算機',
    line1: '都市と日程を選ぶだけで、現地で使う費用を',
    line2: '公式価格をもとに最小〜最大の範囲で計算',
    label: '食事・交通・観光施設の入場料',
    labelWidth: 615,
    titleSize: 78,
    font: 'Arial, Meiryo, Yu Gothic, sans-serif',
  },
];

function svg(card) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b6e4f" />
  <circle cx="1060" cy="128" r="258" fill="#19785b" />
  <circle cx="884" cy="674" r="190" fill="#19785b" />
  <text x="91" y="151" fill="#d6e9e2" font-family="${card.font}" font-size="27" letter-spacing="1.2">✈ TRAVEL BUDGET</text>
  <text x="92" y="246" fill="#ffffff" font-family="${card.font}" font-size="${card.titleSize}" font-weight="700">${card.title}</text>
  <text x="93" y="329" fill="#ffffff" font-family="${card.font}" font-size="34">${card.line1}</text>
  <text x="93" y="382" fill="#ffffff" font-family="${card.font}" font-size="34">${card.line2}</text>
  <rect x="90" y="436" width="${card.labelWidth}" height="69" rx="15" fill="#ffffff" />
  <text x="118" y="480" fill="#0b6e4f" font-family="${card.font}" font-size="29" font-weight="700">${card.label}</text>
</svg>`;
}

for (const card of cards) {
  await sharp(Buffer.from(svg(card))).png().toFile(resolve(root, 'public', card.file));
}
