import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/auto', pathMatch: 'full' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule' },
  { path: 'auto', loadChildren: './auto/auto.module#AutoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
