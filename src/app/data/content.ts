/**
 * Editorial copy & marketing content for the home, about and services pages.
 * Kept separate from photo/collection data so the words can be tuned without
 * touching the gallery wiring.
 */

const B = 'https://mir-s3-cdn-cf.behance.net/project_modules/';

/* ---- Hero ---------------------------------------------------------------- */
export interface HeroSlide {
  background: string;
  kicker: string;
  titleLines: string[];
  text: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    background: 'assets/img/bg-img/hero1.jpeg',
    kicker: 'Mumbai · India',
    titleLines: ['Light, framed', 'with intent.'],
    text: 'I photograph instinctively — chasing honest light, quiet moments and the stories that live between frames.',
  },
  {
    background: 'assets/img/bg-img/hero2.jpeg',
    kicker: 'Portraits · Brands · Naturescapes',
    titleLines: ['Stories told', 'in stills.'],
    text: 'From intimate portraits to expansive landscapes, every commission is built around mood, craft and detail.',
  },
];

/* ---- Statistics ---------------------------------------------------------- */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 9, suffix: '+', label: 'Years behind the lens' },
  { value: 30, suffix: '+', label: 'Brands collaborated with' },
  { value: 480, suffix: '+', label: 'Sessions delivered' },
  { value: 24, suffix: 'k', label: 'Frames archived' },
];

/* ---- Services ------------------------------------------------------------ */
export interface Service {
  icon: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    icon: 'fa-solid fa-user',
    title: 'Portrait Sessions',
    price: 'from ₹12,000',
    description: 'Editorial and personal portraiture that captures character, not just a likeness.',
    features: ['90-min studio or location', '15 retouched images', 'Online gallery delivery', 'Print-ready files'],
  },
  {
    icon: 'fa-solid fa-bag-shopping',
    title: 'Brand & Product',
    price: 'from ₹25,000',
    description: 'Commercial photography for clothing, jewellery and lifestyle brands that needs to sell.',
    features: ['Half / full-day shoots', 'Creative direction', 'Up to 40 final images', 'Commercial licence'],
    featured: true,
  },
  {
    icon: 'fa-solid fa-mountain-sun',
    title: 'Naturescapes & Travel',
    price: 'on request',
    description: 'Fine-art landscape and travel commissions, available as limited-edition prints.',
    features: ['Bespoke locations', 'Fine-art print options', 'Licensing for editorial', 'Framed delivery'],
  },
  {
    icon: 'fa-solid fa-video',
    title: 'Films & Reels',
    price: 'from ₹35,000',
    description: 'Short-form motion and behind-the-scenes films built for brands and social.',
    features: ['Concept to edit', 'Colour grading', '4K deliverables', 'Social cut-downs'],
  },
];

/* ---- Testimonials -------------------------------------------------------- */
export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, Atelier Noir',
    rating: 5,
    quote:
      'Naman has an instinct for light that you cannot teach. Our brand campaign converted better than anything we had shot before — he understood the product and the feeling we wanted to sell.',
    avatar: `${B}disp/c036a9200602291.666586566ccdb.jpeg`,
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Lead, Lumen Jewels',
    rating: 5,
    quote:
      'Calm on set, meticulous in the edit. Every frame felt intentional. The jewellery has never looked this alive — we have worked with him on three collections since.',
    avatar: `${B}disp/20b747205663793.66bee74e75e4b.png`,
  },
  {
    name: 'Rohan Iyer',
    role: 'Travel Editor',
    rating: 5,
    quote:
      'His naturescapes carry a real sense of place. We commissioned a series for a feature and readers still write in about the photographs. A genuine storyteller.',
    avatar: `${B}disp/2d9c56157332373.6376adc98bea8.jpg`,
  },
];

/* ---- About — timeline & extras ------------------------------------------ */
export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2015',
    title: 'The first frame',
    text: 'Bought a semi-professional camera straight out of high school and started photographing everything in sight.',
  },
  {
    year: '2017',
    title: 'Finding the face',
    text: 'Fell for portraiture — studying light in depth and learning to direct people until the moment felt true.',
  },
  {
    year: '2019',
    title: 'Going pro',
    text: 'Turned the craft into a profession, shooting for clothing and jewellery brands across Mumbai.',
  },
  {
    year: 'Today',
    title: '30+ brands & counting',
    text: 'Helping brands represent themselves with imagery and film that earns attention and delivers quality.',
  },
];

export const EQUIPMENT: string[] = [
  'Sony Alpha mirrorless bodies',
  'G-Master prime & zoom glass',
  'Profoto & natural-light kit',
  'DJI gimbals for motion',
];

export const FUN_FACTS: string[] = [
  'Shoots almost entirely on primes',
  'Edits to vinyl, never silence',
  'Golden hour over studio, always',
  'Has photographed in 9 Indian states',
];
