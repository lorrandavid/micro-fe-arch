import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  // bootstrap: [AppComponent]
})
export class AppModule {
  private MICRO_APP_NAME = 'micro-app-insurance';

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(this.MICRO_APP_NAME))  {
      const elem = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define(this.MICRO_APP_NAME, elem);
    }
  }
}
