import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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
      .map(config => this.http.get(`${config.prefix}${lang}${config.suffix}`))
    ).pipe(
      map(response => response.reduce((a, b) => (Object.assign(a, b))))
    );
  }
}

export function HttpLoaderFactory(http: HttpClient): any {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
