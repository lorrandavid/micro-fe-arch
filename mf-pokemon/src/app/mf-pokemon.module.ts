import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MfPokemonRoutingModule } from './mf-pokemon-routing.module';
import { MfPokemonComponent } from './mf-pokemon.component';

@NgModule({
  declarations: [
    MfPokemonComponent
  ],
  imports: [
    BrowserModule,
    MfPokemonRoutingModule
  ],
  exports: [MfPokemonComponent]
})
export class MfPokemonModule { }
