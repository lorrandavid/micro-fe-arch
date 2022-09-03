import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepIdentificationComponent } from './step-identification.component';

const routes: Routes = [
  {
    path: '',
    component: StepIdentificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepIdentificationRoutingModule { }
