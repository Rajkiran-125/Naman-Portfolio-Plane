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

// Titles/categories/dates preserved from the original template; the broken local
// image refs (img/bg-img/51-59.jpg) are swapped for working Behance images.
export const BLOG_POSTS: BlogPost[] = [
  {
    image: `${B}disp/783ff9200602291.666586566c757.jpg`,
    category: 'Photography',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find Most Attractive',
    wide: true,
  },
  {
    image: `${B}disp/2d9c56157332373.6376adc98bea8.jpg`,
    category: 'Camera',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find',
  },
  {
    image: `${B}disp/684ab8206717261.66d0dba53d230.jpg`,
    category: 'Country',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: "Vietnam's largest art community",
  },
  {
    image: `${B}disp/c036a9200602291.666586566ccdb.jpeg`,
    category: 'Camera',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'Photo awards of the year',
  },
  {
    image: `${B}disp/b2e896200602291.666586566b430.jpg`,
    category: 'Tips',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find',
  },
  {
    image: `${B}disp/74a8dd206717261.66d0dba53e875.jpg`,
    category: 'Photography',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find Most Attractive',
    wide: true,
  },
  {
    image: `${B}disp/30e557205663793.66bee74e7630b.jpg`,
    category: 'Country',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find',
  },
  {
    image: `${B}fs/020613201952933.667d6969b7124.jpg`,
    category: 'Camera',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find Most Attractive',
    wide: true,
  },
  {
    image: `${B}disp/9d20c9201525475.6675d1016855b.jpg`,
    category: 'Photography',
    date: 'May 19, 2019',
    comments: '3 Comment',
    title: 'The Female Body Shape Men Find',
  },
];
