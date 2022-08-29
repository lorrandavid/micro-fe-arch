import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html'
})
export class InsuranceComponent implements OnInit {
  private readonly MICRO_INSURANCE_URL = 'http://localhost:4300/main.js'
  // private readonly MICRO_INSURANCE_URL = 'http://localhost:3000/main.js'

  constructor() { }

  ngOnInit() {
    this.doBootstrap();
  }

  private doBootstrap(): void {
    if (!document.querySelector(`[src="${this.MICRO_INSURANCE_URL}"]`)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.MICRO_INSURANCE_URL;
      document.body.appendChild(script);
    }
  }
}
