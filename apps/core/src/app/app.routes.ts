import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('settings/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'users',
        loadChildren: () => import('users/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'daily',
        loadChildren: () => import('dashboard/Routes').then((m) => m!.remoteRoutes),
      },
      {
        redirectTo: 'daily',
        pathMatch: 'full',
        path: '**',
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
