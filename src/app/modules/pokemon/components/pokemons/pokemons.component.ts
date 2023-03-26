import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services";
import {IPokemonDetails} from "../../interfaces";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: IPokemonDetails[] = [];
  totalItem: number;
  offset: number = 0;
  limit: number = 20;
  page = 1;

  constructor(
    private pokemonService: PokemonService,
  ) {
  }


  ngOnInit(): void {
    this.getPokemons();
    this.changeOffset();
  }

  getPokemons() {
    this.pokemonService.getAll(this.limit, this.offset, this.page).subscribe(res => {
      this.totalItem = res.count;

      res.results.forEach(result => {
        this.pokemonService.getDetails(result.name).subscribe(value => {
          this.pokemons.push(value);
        })
      })
      console.log(this.pokemons);
    })
  }

  changeOffset() {
    if (this.page === 1) {
      this.offset = 0
    }else {
      this.offset = this.page * this.limit - this.limit;
    }
  }
}
