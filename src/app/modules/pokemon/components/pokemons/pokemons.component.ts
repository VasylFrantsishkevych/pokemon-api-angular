import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services";
import {IResults} from "../../interfaces";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: IResults[];

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(value => {
      this.pokemons = value.results

    })

  }

}
