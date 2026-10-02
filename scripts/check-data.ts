import { estimateTrip } from '../src/core/estimate';
import { cities, samples } from '../src/data';

for (const c of cities) {
  const e = estimateTrip({ cityId: c.id, visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard' }, c, samples);
  const f = (r: { min: number; max: number } | null) => (r ? `${Math.round(r.min)}~${Math.round(r.max)}` : '—');
  console.log(c.nameEn.padEnd(10), 'fill', e.fillRate.toFixed(2), 'missing', e.missing.join(',') || '-', 'total', f(e.total), c.currency);
}
