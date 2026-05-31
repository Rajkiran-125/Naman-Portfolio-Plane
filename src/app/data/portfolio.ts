export type PortfolioCategory = 'human' | 'nature' | 'country' | 'video';

export interface PortfolioItem {
  /** Image URL (used for both thumbnail and the lightbox full view). */
  src: string;
  /** Category tags the gallery filter matches against. */
  categories: PortfolioCategory[];
  /** Render across two grid columns (wide tile). */
  wide?: boolean;
}

export interface PortfolioFilter {
  label: string;
  /** `null` means "All". */
  value: PortfolioCategory | null;
}

export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  { label: 'All', value: null },
  { label: 'Human', value: 'human' },
  { label: 'Nature', value: 'nature' },
  { label: 'Country', value: 'country' },
  { label: 'Video', value: 'video' },
];

const B = 'https://mir-s3-cdn-cf.behance.net/project_modules/';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { src: `${B}fs/020613201952933.667d6969b7124.jpg`, categories: ['nature'] },
  { src: `${B}1400/d42b66201952933.667d6969b6c06.jpg`, categories: ['video', 'human'] },
  { src: `${B}disp/783ff9200602291.666586566c757.jpg`, categories: ['country'] },
  { src: `${B}disp/c036a9200602291.666586566ccdb.jpeg`, categories: ['human'] },
  { src: `${B}disp/b2e896200602291.666586566b430.jpg`, categories: ['nature'] },
  { src: `${B}disp/b437a3157332373.6376adc98ce32.jpg`, categories: ['video', 'country'] },
  { src: `${B}disp/2d9c56157332373.6376adc98bea8.jpg`, categories: ['human'] },
  { src: `${B}disp/684ab8206717261.66d0dba53d230.jpg`, categories: ['nature'] },
  { src: `${B}disp/74a8dd206717261.66d0dba53e875.jpg`, categories: ['video', 'country'], wide: true },
  { src: `${B}disp/20b747205663793.66bee74e75e4b.png`, categories: ['human'] },
  { src: `${B}disp/30e557205663793.66bee74e7630b.jpg`, categories: ['country'] },
  { src: `${B}disp/8021b4202368509.6684f58e8f593.jpg`, categories: ['country'] },
  { src: `${B}disp/9d20c9201525475.6675d1016855b.jpg`, categories: ['country'] },
  { src: `${B}disp/e238cc201448975.66747908b6f0c.jpg`, categories: ['country'] },
  { src: `${B}disp/6e1c4f201448975.66747908b7729.jpg`, categories: ['country'] },
  { src: `${B}disp/34fa7e200149029.665ddae2ce0c8.jpg`, categories: ['country'] },
  { src: `${B}disp/f58ba7196731835.662519169813e.jpg`, categories: ['country'] },
  { src: `${B}1400/0846df191137471.65c613ef8b4bd.jpg`, categories: ['country'] },
  { src: `${B}disp/59d5d1191137471.65c613ef8a4dd.jpg`, categories: ['country'] },
  { src: `${B}disp/6c5a85182717055.6532636313ab9.jpg`, categories: ['country'] },
  { src: `${B}disp/172dee182717055.653263630c989.jpg`, categories: ['country'] },
  { src: `${B}fs/38a3eb135419757.61e799fc785d5.jpg`, categories: ['country'] },
  { src: `${B}fs/d5f562135419757.61e799fc79807.jpg`, categories: ['country'] },
  { src: `${B}fs/3f46be135419757.61e799fc7c8b2.jpg`, categories: ['country'] },
  { src: `${B}fs/a69ef9135419757.61e799fc78eda.jpg`, categories: ['country'] },
  { src: `${B}fs/6e93b3135419757.61e799fc7ba9b.jpg`, categories: ['country'] },
  { src: `${B}fs/94e526140866629.6249a6d8a0878.jpg`, categories: ['country'] },
  { src: `${B}fs/eaa4b2140867195.6249a9a11e25a.jpg`, categories: ['country'] },
  { src: `${B}fs/1ce399154269491.633edffdb204a.jpg`, categories: ['country'] },
  { src: `${B}fs/453de0154269491.633edffdb3540.jpg`, categories: ['country'] },
  { src: `${B}fs/b5e5b6140262701.623e12d950a50.jpg`, categories: ['country'] },
  { src: `${B}fs/22b03f140262701.623e12d94de2d.jpg`, categories: ['country'] },
  { src: `${B}fs/0f401b129892243.61747ea236d22.jpeg`, categories: ['country'] },
  { src: `${B}fs/a4345c129892243.61747ea23a033.jpeg`, categories: ['country'] },
  { src: `${B}fs/1e8abd129892243.61747ea237461.jpeg`, categories: ['country'] },
  { src: `${B}fs/fff350140515907.62431ed2d0768.jpg`, categories: ['country'] },
  { src: `${B}fs/14a989140515907.62431ed2ca9e3.jpg`, categories: ['country'] },
  { src: `${B}fs/e0539f140515907.62431ed2c885c.jpg`, categories: ['country'] },
  { src: `${B}fs/9623a8157332045.6376ac15946c4.jpg`, categories: ['country'] },
  { src: `${B}fs/ba4f58157332373.6376adc98acf5.jpg`, categories: ['country'] },
  { src: `${B}max_1200/d91684157332373.6376adc98990e.jpg`, categories: ['country'] },
  { src: `${B}fs/403261167532803.642ae40561686.jpg`, categories: ['country'] },
  { src: `${B}fs/e04ec3182850949.653554582bf36.jpg`, categories: ['country'] },
  { src: `${B}fs/a67142207946161.66e68a74c6ecd.jpg`, categories: ['country'] },
  { src: `${B}fs/b23ada207946161.66e68a74c9336.jpg`, categories: ['country'] },
  { src: `${B}fs/fd3525207946161.66e68a74cfc65.jpg`, categories: ['country'] },
  { src: `${B}fs/564f1a207946161.66e68a74ca7ea.jpg`, categories: ['country'] },
  { src: `${B}fs/516e9c207946161.66e68a74cbc48.jpg`, categories: ['country'] },
];
