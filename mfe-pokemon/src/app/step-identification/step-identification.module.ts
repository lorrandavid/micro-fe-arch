import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepIdentificationRoutingModule } from './step-identification-routing.module';
import { StepIdentificationComponent } from './step-identification.component';

@NgModule({
  declarations: [StepIdentificationComponent],
  imports: [
    CommonModule,
    StepIdentificationRoutingModule
  ]
})
export class StepIdentificationModule { }
