import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { StepPersonalComponent } from './step-personal/step-personal.component';
import { StepIdentificationComponent } from './step-identification/step-identification.component';

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
        path: 'insurance/step-personal',
        component: StepPersonalComponent
      },
      {
        path: 'insurance/step-identification',
        component: StepIdentificationComponent
      }
    ]),
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  private MICRO_APP_NAME = 'micro-app-insurance';

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(this.MICRO_APP_NAME))  {
      const elem = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define(this.MICRO_APP_NAME, elem);
      console.log('ngDoBootstrap');
    }
  }
}
