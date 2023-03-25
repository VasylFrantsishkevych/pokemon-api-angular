import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import {PokemonService} from "./services";
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonModule { }
