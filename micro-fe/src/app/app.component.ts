import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  @Input() route?: string; // Route comes from platform to trigger it inside mfe
  @Input() lang?: 'pt' | 'en';  // Lang comes from platform to trigger it inside mfe

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.addLangs(['pt']);
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');

    console.log('AppComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.route && this.route) {
      this.router.navigateByUrl(this.route, {
        state: { fromPlatform: true } // Use state to determine which view triggered router changes
      });
    }

    if (changes.lang && this.lang) {
      this.translate.use(this.lang);
    }
  }
}
