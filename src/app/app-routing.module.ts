import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/guard/admin.guard';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './shared/layout-components/layout/error-layout/error-layout.component';
import { FullLayoutComponent } from './shared/layout-components/layout/full-layout/full-layout.component';
import { SwitcherLayoutComponent } from './shared/layout-components/layout/switcher-layout/switcher-layout.component';
import { customRoute } from './shared/routes/custom.routes';
import { errorRoute } from './shared/routes/error.routes';
import { content } from './shared/routes/routes';
import { switcher } from './shared/routes/switcher.routes';

const routes: Routes = [
  // {
  //   path: '',
  //   component:DashboardComponent
  // },
  // {
  //   path:'',
  //   loadChildren:() => import('./../app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
  //   pathMatch:'full'
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
  // },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AdminGuard],
    children: content
  },
  {
    path: '',
    component: SwitcherLayoutComponent,
    canActivate: [AdminGuard],
    children: switcher
  },
  {
    path: '',
    component: ErrorLayoutComponent,
    canActivate: [AdminGuard],
    children: errorRoute
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AdminGuard],
    children: customRoute
  },
  {
    path: '**',
    redirectTo: '/error-pages/error-404'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
