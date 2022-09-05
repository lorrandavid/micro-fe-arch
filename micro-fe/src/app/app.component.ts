import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  @Input() route?: string; // Route comes from platform to trigger it inside mfe

  constructor(private router: Router) {
    console.log('AppComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.route && this.route) {
      this.router.navigateByUrl(this.route, {
        state: { fromPlatform: true } // Use state to determine which view triggered router changes
      });
    }
  }
}
