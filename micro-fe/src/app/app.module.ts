import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StepPersonalComponent } from './step-personal/step-personal.component';
import { StepIdentificationComponent } from './step-identification/step-identification.component';

export const MICRO_APP_NAME = 'micro-app-insurance';

@NgModule({
  declarations: [
    AppComponent,
    StepPersonalComponent,
    StepIdentificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'insurance/step-personal', // Full route - must be the same as the platform route
        component: StepPersonalComponent
      },
      {
        path: 'insurance/step-identification', // Full route - must be the same as the platform route
        component: StepIdentificationComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(MICRO_APP_NAME))  {
      const elem = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define(MICRO_APP_NAME, elem);
      console.log('ngDoBootstrap');
    }
  }
}
