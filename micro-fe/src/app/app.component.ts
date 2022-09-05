import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

interface RouterEvent {
  url: string;
  replaceUrl: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnDestroy {
  @Input() route?: string; // Route comes from platform to trigger it inside mfe
  @Input() lang?: 'pt' | 'en';  // Lang comes from platform to trigger it inside mfe

  @Output() routeChange = new EventEmitter<RouterEvent>();

  private ngUnsubscribe$ = new Subject<void>();

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.addLangs(['pt']);
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');

    this.registerOutgoingRouting();

    console.log('AppComponent');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
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

  private registerOutgoingRouting(): Subscription {
    return this.router.events
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        filter(event => event instanceof RoutesRecognized && (!this.isRouteChangeFromPlatform() || this.isRedirect(event)))
      )
      .subscribe((event: RoutesRecognized) => {
        this.routeChange.next({
          url: event.urlAfterRedirects,
          replaceUrl: this.isRedirect(event)
        });
      });
  }

  /**
   * Detect if changes are ocurring from Platform to Mfe
   */
  private isRouteChangeFromPlatform(): boolean {
    return (
      this.router.getCurrentNavigation() &&
      this.router.getCurrentNavigation().extras &&
      this.router.getCurrentNavigation().extras.state &&
      this.router.getCurrentNavigation().extras.state.fromPlatform
    );
  }

  private isRedirect(event: RoutesRecognized): boolean {
    return event.url !== event.urlAfterRedirects;
  }
}
