export interface InstagramItem {
  img: string;
  /** Link to the post on Instagram. */
  url: string;
}

const B = 'https://mir-s3-cdn-cf.behance.net/project_modules/';

export const INSTAGRAM_HANDLE = 'ng_shooter';

export const INSTAGRAM_ITEMS: InstagramItem[] = [
  {
    img: `${B}fs/211072215433013.676bb92644a95.jpg`,
    url: 'https://www.instagram.com/p/C8Ex4qGNdZ7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    img: `${B}fs/9aa51c215433013.676bb92643d63.jpg`,
    url: 'https://www.instagram.com/p/DBOa2g6T9Aw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    img: `${B}fs/1c274a215433013.676bb92643559.jpg`,
    url: 'https://www.instagram.com/p/C9cpvFwvoRy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    img: `${B}disp/cc0e21130267305.617c193e10f75.jpg`,
    url: 'https://www.instagram.com/p/CWYd57VMRL2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    img: `${B}disp/6e1c4f201448975.66747908b7729.jpg`,
    url: 'https://www.instagram.com/p/C8bTMxhNWzP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    img: `${B}fs/f9ee07215433013.676bc09bd1025.jpg`,
    url: 'https://www.instagram.com/p/CweYbp5t5ad/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];
