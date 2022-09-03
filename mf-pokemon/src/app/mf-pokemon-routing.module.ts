import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MfPokemonComponent } from './mf-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: MfPokemonComponent,
    children: [
      {
        path: 'step-personal',
        loadChildren: './step-personal/step-personal.module#StepPersonalModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MfPokemonRoutingModule { }
