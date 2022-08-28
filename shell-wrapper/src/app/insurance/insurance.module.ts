import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [InsuranceComponent],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InsuranceModule { }
