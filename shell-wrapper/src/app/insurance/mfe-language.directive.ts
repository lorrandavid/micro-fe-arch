import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil, map, startWith } from 'rxjs/operators';

@Directive({
  selector: '[appMfeLanguage]'
})
export class MfeLanguageDirective implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject<void>();

  constructor(private elem: ElementRef, private renderer: Renderer2, private translateService: TranslateService) { }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnInit(): void {
    this.translateService.onLangChange
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        map((event) => event.lang),
        startWith(this.translateService.currentLang ? this.translateService.currentLang : this.translateService.defaultLang)
      ).subscribe(lang => {
        this.renderer.setAttribute(this.elem.nativeElement, 'lang', lang);
      });
  }
}
