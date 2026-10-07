import type { City, FoodRecommendation } from '../core/types';
import { fmt, localName, useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { cityName } from './TripForm';

interface Props {
  city: City;
  foods: FoodRecommendation[];
}

/**
 * 도시의 추천 음식: 사진(자유 이용 허락 이미지가 있을 때만)·이름·무슨 음식인지 한 줄.
 * 가게 추천·예산대·추천 근거 문장은 보이지 않는다(가격 자료는 계산에만 쓴다).
 */
export function FoodSection({ city, foods }: Props) {
  const { t, lang } = useI18n();
  const mine = foods.filter((f) => f.cityId === city.id);
  if (mine.length === 0) return null;

  return (
    <section className="card foods" aria-labelledby="foods-title" data-testid="foods">
      <h2 id="foods-title">{fmt(t.foods.title, { city: cityName(city, lang) })}</h2>
      <ul className="food-list">
        {mine.map((f) => {
          const name = localName(lang, f.nameKo, f.nameEn, f.nameJa);
          // 원어에 가까운 이름을 작게: 한국어 화면은 영문, 그 밖에는 한국 음식만 한글
          const sub = lang === 'ko' ? f.nameEn : f.cityId === 'seoul' || f.cityId === 'busan' || f.cityId === 'jeju' ? f.nameKo : '';
          return (
            <li key={f.nameEn} className="food" data-food={f.nameEn}>
              {f.photo && (
                <figure className="food-photo">
                  <img src={f.photo.url} alt={name} loading="lazy" decoding="async" width={400} height={300} />
                  <figcaption>
                    <ExternalLink href={f.photo.page}>{`${t.foods.photo} ${f.photo.author} · ${f.photo.license}`}</ExternalLink>
                  </figcaption>
                </figure>
              )}
              <div className="food-body">
                <h3>
                  {name}
                  {sub && sub !== name && <small>{sub}</small>}
                </h3>
                {f.desc && <p>{f.desc[lang]}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
