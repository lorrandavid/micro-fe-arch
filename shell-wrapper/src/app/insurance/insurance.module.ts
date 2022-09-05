import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MfeRoutingDirective } from './mfe-routing.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InsuranceComponent, MfeRoutingDirective],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    TranslateModule.forChild()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InsuranceModule { }
