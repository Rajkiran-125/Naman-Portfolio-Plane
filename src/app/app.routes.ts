import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Naman Gupta — Photographer & Visual Storyteller',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About | Naman Gupta',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Gallery | Naman Gupta',
  },
  {
    // Collection detail. Title is set dynamically inside the component.
    path: 'gallery/:slug',
    loadComponent: () =>
      import('./pages/collection/collection.component').then((m) => m.CollectionComponent),
    title: 'Collection | Naman Gupta',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesPageComponent),
    title: 'Services | Naman Gupta',
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
    title: 'Journal | Naman Gupta',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | Naman Gupta',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found | Naman Gupta',
  },
];
