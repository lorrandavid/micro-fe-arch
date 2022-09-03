import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-step-personal',
  templateUrl: './step-personal.component.html',
  styleUrls: ['./step-personal.component.css']
})
export class StepPersonalComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(params => { console.log(params) });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
