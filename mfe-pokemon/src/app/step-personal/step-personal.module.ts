import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepPersonalRoutingModule } from './step-personal-routing.module';
import { StepPersonalComponent } from './step-personal.component';

@NgModule({
  declarations: [StepPersonalComponent],
  imports: [
    CommonModule,
    StepPersonalRoutingModule
  ]
})
export class StepPersonalModule { }
