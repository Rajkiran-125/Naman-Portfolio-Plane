export interface NavItem {
  label: string;
  /** Internal router path. Omit for dropdown parents. */
  path?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  /** Icon CSS class (themify `ti-*` or FontAwesome `fa-*`). */
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '' },
  { label: 'About', path: 'about' },
  { label: 'Gallery', path: 'gallery' },
  { label: 'Blog', path: 'blog' },
  { label: 'Contact', path: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ng_shooter?igsh=Nno3N3ZlejIyMTRx',
    icon: 'ti-instagram',
  },
  {
    label: 'Behance',
    url: 'https://www.behance.net/namanguptab17d',
    icon: 'fa-brands fa-square-behance',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/naman-gupta-a0b422212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    icon: 'ti-linkedin',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/share/17kvjw3o9P/?mibextid=wwXIfr',
    icon: 'ti-facebook',
  },
];

export const SITE = {
  brandLogo: 'assets/img/core-img/logo.PNG',
  email: 'namangupta6449@gmail.com',
  phone: '+91 8419979591',
  address: 'Mumbai, Maharashtra',
  authorName: 'Rajkiran Jaiswar',
  authorUrl: 'https://rajkiranJaiswar.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120660.76605771233!2d72.87775347683078!3d19.079166697281114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735108744468!5m2!1sen!2sin',
};
