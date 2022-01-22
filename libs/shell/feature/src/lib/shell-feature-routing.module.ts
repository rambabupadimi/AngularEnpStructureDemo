import { Route } from '@angular/router';
import { MainLayoutComponent } from '@demo-app/shell/ui/layout';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@demo-app/users/feature/shell'))
            .UsersFeatureShellModule,
      },
    ],
  },
];
