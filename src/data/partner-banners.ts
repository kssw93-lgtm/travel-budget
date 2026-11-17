type LinkLang = 'ko' | 'en' | 'ja';

/** Static Trip.com banners generated in the approved affiliate portal. Keep every URL parameter intact. */
export const tripPartnerBanner = (lang: LinkLang): string => ({
  ko: 'https://kr.trip.com/partners/ad/SB21268410?Allianceid=11407425&SID=336341650&trip_sub1=',
  en: 'https://www.trip.com/partners/ad/SB21268396?Allianceid=11407425&SID=336341650&trip_sub1=',
  ja: 'https://jp.trip.com/partners/ad/SB21268445?Allianceid=11407425&SID=336341650&trip_sub1=',
})[lang];
