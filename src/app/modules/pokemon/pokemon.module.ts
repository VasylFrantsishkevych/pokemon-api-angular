import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import {PokemonService} from "./services";


@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonModule { }
