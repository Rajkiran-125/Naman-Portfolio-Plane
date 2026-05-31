import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Naman Portfolio',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About | Naman Portfolio',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Gallery | Naman Portfolio',
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog | Naman Portfolio',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | Naman Portfolio',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found | Naman Portfolio',
  },
];
