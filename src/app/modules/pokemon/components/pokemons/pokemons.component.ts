import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services";
import {IPokemonDetails, IResults} from "../../interfaces";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: IPokemonDetails[] = [];
  totalItem: number;
  page = 1;
  names: IResults[];

  constructor(
    private pokemonService: PokemonService,
  ) {
  }


  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAll(20, this.page+1).subscribe(res => {
      this.totalItem = res.count;
      this.names = res.results;
      res.results.forEach(result => {
        this.pokemonService.getDetails(result.url).subscribe(value => {
          this.pokemons.push(value);
        })
      })
    })
  }
}
