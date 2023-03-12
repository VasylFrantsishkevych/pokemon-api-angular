import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import {PokemonService} from "./services";
import { PokemonComponent } from './components/pokemon/pokemon.component';


@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent
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
