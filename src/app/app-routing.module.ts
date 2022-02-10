import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VWLandingPageComponent } from './vwlanding-page/vwlanding-page.component';
import { LoginCompleteComponent } from './login-complete/login-complete.component';

const routes: Routes = [
  {path: '', component: VWLandingPageComponent},
  {path: 'loginComplete', component: LoginCompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
