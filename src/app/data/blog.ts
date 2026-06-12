export interface BlogPost {
  image: string;
  category: string;
  date: string;
  comments: string;
  title: string;
  /** Render across two columns (large feature tile). */
  wide?: boolean;
}

const B = 'https://mir-s3-cdn-cf.behance.net/project_modules/';

// Editorial journal entries — real photography writing in place of the original
// template's placeholder copy. Behance images are reused as working covers.
export const BLOG_POSTS: BlogPost[] = [
  {
    image: `${B}disp/783ff9200602291.666586566c757.jpg`,
    category: 'Travel',
    date: 'March 14, 2025',
    comments: '6 min read',
    title: 'Chasing Light: A Coastal Naturescape Diary',
    wide: true,
  },
  {
    image: `${B}disp/2d9c56157332373.6376adc98bea8.jpg`,
    category: 'Portraits',
    date: 'February 2, 2025',
    comments: '5 min read',
    title: 'How I Direct First-Time Portrait Subjects',
  },
  {
    image: `${B}disp/684ab8206717261.66d0dba53d230.jpg`,
    category: 'Travel',
    date: 'January 18, 2025',
    comments: '7 min read',
    title: 'Hanoi After Dark: A Street Photography Walk',
  },
  {
    image: `${B}disp/c036a9200602291.666586566ccdb.jpeg`,
    category: 'Craft',
    date: 'December 9, 2024',
    comments: '4 min read',
    title: 'Why I Shoot Almost Everything on Primes',
  },
  {
    image: `${B}disp/b2e896200602291.666586566b430.jpg`,
    category: 'Lighting',
    date: 'November 21, 2024',
    comments: '5 min read',
    title: 'Golden Hour vs. Studio: Choosing Your Light',
  },
  {
    image: `${B}disp/74a8dd206717261.66d0dba53e875.jpg`,
    category: 'Brand',
    date: 'October 30, 2024',
    comments: '8 min read',
    title: 'Building a Brand Story in a Single Frame',
    wide: true,
  },
  {
    image: `${B}disp/30e557205663793.66bee74e7630b.jpg`,
    category: 'Naturescapes',
    date: 'September 12, 2024',
    comments: '6 min read',
    title: 'Finding Stillness: A Year in the Mountains',
  },
  {
    image: `${B}fs/020613201952933.667d6969b7124.jpg`,
    category: 'Post',
    date: 'August 4, 2024',
    comments: '9 min read',
    title: 'Editing to Mood: My Black-and-White Workflow',
    wide: true,
  },
  {
    image: `${B}disp/9d20c9201525475.6675d1016855b.jpg`,
    category: 'Gear',
    date: 'July 16, 2024',
    comments: '4 min read',
    title: 'The Kit I Actually Carry on Every Shoot',
  },
];
