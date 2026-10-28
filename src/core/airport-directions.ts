import type { City } from './types';

export interface AirportOrigin {
  /** Name shown on the route link. */
  label: string;
  /** Place query sent to Google Maps. */
  query: string;
}

/** Airports named in the city's existing travel guidance; multiple airports stay separate. */
const AIRPORT_ORIGINS: Record<string, AirportOrigin[]> = {
  amsterdam: [{ label: 'Amsterdam Airport Schiphol', query: 'Amsterdam Airport Schiphol' }],
  bali: [{ label: 'I Gusti Ngurah Rai International Airport', query: 'I Gusti Ngurah Rai International Airport' }],
  bangkok: [
    { label: 'Suvarnabhumi Airport (BKK)', query: 'Suvarnabhumi Airport' },
    { label: 'Don Mueang Airport (DMK)', query: 'Don Mueang International Airport' },
  ],
  barcelona: [{ label: 'Barcelona–El Prat Airport', query: 'Josep Tarradellas Barcelona-El Prat Airport' }],
  basel: [{ label: 'EuroAirport Basel–Mulhouse–Freiburg', query: 'EuroAirport Basel-Mulhouse-Freiburg' }],
  bruges: [{ label: 'Brussels Airport', query: 'Brussels Airport' }],
  busan: [{ label: 'Gimhae International Airport', query: 'Gimhae International Airport' }],
  cebu: [{ label: 'Mactan–Cebu International Airport', query: 'Mactan-Cebu International Airport' }],
  copenhagen: [{ label: 'Copenhagen Airport (CPH)', query: 'Copenhagen Airport' }],
  dublin: [{ label: 'Dublin Airport', query: 'Dublin Airport' }],
  fukuoka: [{ label: 'Fukuoka Airport', query: 'Fukuoka Airport' }],
  'hong-kong': [{ label: 'Hong Kong International Airport', query: 'Hong Kong International Airport' }],
  interlaken: [{ label: 'Zurich Airport', query: 'Zurich Airport' }],
  istanbul: [
    { label: 'Istanbul Airport (IST)', query: 'Istanbul Airport' },
    { label: 'Sabiha Gökçen Airport (SAW)', query: 'Sabiha Gokcen International Airport' },
  ],
  'kuala-lumpur': [{ label: 'Kuala Lumpur International Airport (KLIA)', query: 'Kuala Lumpur International Airport' }],
  kyoto: [{ label: 'Kansai International Airport', query: 'Kansai International Airport' }],
  london: [
    { label: 'Heathrow Airport (LHR)', query: 'Heathrow Airport' },
    { label: 'Gatwick Airport (LGW)', query: 'Gatwick Airport' },
  ],
  lucerne: [{ label: 'Zurich Airport', query: 'Zurich Airport' }],
  milan: [
    { label: 'Milan Malpensa Airport (MXP)', query: 'Milan Malpensa Airport' },
    { label: 'Milan Linate Airport (LIN)', query: 'Milan Linate Airport' },
  ],
  'new-york': [
    { label: 'John F. Kennedy International Airport (JFK)', query: 'John F. Kennedy International Airport' },
    { label: 'Newark Liberty International Airport (EWR)', query: 'Newark Liberty International Airport' },
  ],
  osaka: [
    { label: 'Kansai International Airport (KIX)', query: 'Kansai International Airport' },
    { label: 'Osaka Itami Airport (ITM)', query: 'Osaka International Airport Itami' },
  ],
  paris: [
    { label: 'Charles de Gaulle Airport (CDG)', query: 'Paris Charles de Gaulle Airport' },
    { label: 'Paris-Orly Airport (ORY)', query: 'Paris-Orly Airport' },
  ],
  rome: [
    { label: 'Leonardo da Vinci–Fiumicino Airport (FCO)', query: 'Leonardo da Vinci-Fiumicino Airport' },
    { label: 'Ciampino–G. B. Pastine Airport (CIA)', query: 'Ciampino–G. B. Pastine Airport' },
  ],
  sapporo: [{ label: 'New Chitose Airport', query: 'New Chitose Airport' }],
  seoul: [
    { label: 'Incheon International Airport (ICN)', query: 'Incheon International Airport' },
    { label: 'Gimpo International Airport (GMP)', query: 'Gimpo International Airport' },
  ],
  shanghai: [
    { label: 'Shanghai Pudong International Airport (PVG)', query: 'Shanghai Pudong International Airport' },
    { label: 'Shanghai Hongqiao International Airport (SHA)', query: 'Shanghai Hongqiao International Airport' },
  ],
  singapore: [{ label: 'Singapore Changi Airport', query: 'Singapore Changi Airport' }],
  taipei: [
    { label: 'Taiwan Taoyuan International Airport (TPE)', query: 'Taiwan Taoyuan International Airport' },
    { label: 'Taipei Songshan Airport (TSA)', query: 'Taipei Songshan Airport' },
  ],
  tokyo: [
    { label: 'Haneda Airport (HND)', query: 'Tokyo Haneda Airport' },
    { label: 'Narita International Airport (NRT)', query: 'Narita International Airport' },
  ],
  turku: [{ label: 'Turku Airport', query: 'Turku Airport' }],
  zurich: [{ label: 'Zurich Airport', query: 'Zurich Airport' }],
};

export function airportOrigins(city: City): AirportOrigin[] {
  return AIRPORT_ORIGINS[city.id] ?? [{ label: `${city.nameEn} Airport`, query: `${city.nameEn} Airport` }];
}

export function airportDirectionsUrl(origin: string, destination: string, lang: 'ko' | 'en' | 'ja'): string {
  const params = new URLSearchParams({ api: '1', origin, destination, travelmode: 'transit', hl: lang });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
