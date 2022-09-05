import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StepPersonalComponent } from './step-personal/step-personal.component';
import { StepIdentificationComponent } from './step-identification/step-identification.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export const MICRO_APP_NAME = 'micro-app-insurance';

class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, public resources: { prefix: string; suffix: string }[] = [
    {
      prefix: '/assets/i18n/',
      suffix: '.json'
    }
  ]) {}

  public getTranslation(lang: string): any {
    return forkJoin(
      this.resources
      .map(config => this.http.get(`${environment.mfeUrl}${config.prefix}${lang}${config.suffix}`))
    ).pipe(
      map(response => response.reduce((a, b) => (Object.assign(a, b))))
    );
  }
}

export function HttpLoaderFactory(http: HttpClient): any {
  return new MultiTranslateHttpLoader(http, [
    { prefix: '/assets/i18n/', suffix: '.json' }
  ]);
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
