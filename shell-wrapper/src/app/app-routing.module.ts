import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auto', pathMatch: 'full' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule', canActivate: [AuthGuard] },
  { path: 'auto', loadChildren: './auto/auto.module#AutoModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
