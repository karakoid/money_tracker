import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './pages/login/login.routes';
import { MainPageRoutes } from './pages/main-page/main-page.routes';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...LoginRoutes,
  ...MainPageRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
