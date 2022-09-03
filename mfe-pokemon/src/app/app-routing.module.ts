import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'step-personal',
    loadChildren: './step-personal/step-personal.module#StepPersonalModule'
  },
  {
    path: 'step-identification',
    loadChildren: './step-identification/step-identification.module#StepIdentificationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
