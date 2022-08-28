import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './auto.component';
import { AutoRoutingModule } from './auto-routing.module';

@NgModule({
  declarations: [AutoComponent],
  imports: [
    CommonModule,
    AutoRoutingModule
  ]
})
export class AutoModule { }
