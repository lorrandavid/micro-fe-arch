import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { EntryComponent } from './entry.component';
import { MfPokemonModule } from '../mf-pokemon.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [EntryComponent],
  imports: [
    MfPokemonModule
  ]
})
export class EntryModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  /**
   * Defines custom element which will be shown on the platform
   */
  ngDoBootstrap(): void {
    const customElement = createCustomElement(EntryComponent, { injector: this.injector });
    window.customElements.define('mf-pokemon-entry', customElement);
    console.log('Registered custom element mf-pokemon-entry');
  }
}
