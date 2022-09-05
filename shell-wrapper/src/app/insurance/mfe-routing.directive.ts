import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

interface RouterEvent {
  url: string;
  replaceUrl: boolean;
}

@Directive({
  selector: '[appMfeRouting]'
})
export class MfeRoutingDirective implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject<void>();

  constructor(private elem: ElementRef, private router: Router, private route: ActivatedRoute, private renderer: Renderer2) { }

  @HostListener('routeChange', ['$event'])
  handleRouteChange(event: { detail?: RouterEvent }) {
    const e = event.detail;

    if (e && e.url && e.url.startsWith('/')) {
      this.router.navigateByUrl(e.url, {
        replaceUrl: e.replaceUrl || false
      });
    } else {
      console.warn('MfeRouting received an invalid router event');
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnInit(): void {
    this.route.url.pipe(
      takeUntil(this.ngUnsubscribe$),
      map(() => this.router.url)
    ).subscribe(url => {
      this.renderer.setAttribute(this.elem.nativeElement, 'route', url);
    });
  }
}
