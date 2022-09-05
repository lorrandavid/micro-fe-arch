import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html'
})
export class InsuranceComponent implements OnInit {
  private readonly MICRO_INSURANCE_URL = `${environment.mfeUrl}/main.js`;

  public pokemon: any;

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

  public handleSelectPokemon(pokemon: any): void {
    this.pokemon = pokemon;
  }
}
