import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepPersonalComponent } from './step-personal.component';

const routes: Routes = [
  { path: '', component: StepPersonalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepPersonalRoutingModule { }
