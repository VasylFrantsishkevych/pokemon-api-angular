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

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(res => {
      res.results.forEach(result => {
        this.pokemonService.getDetails(result.url).subscribe(value => {
          this.pokemons.push(value);
        })
      })
    })
  }
}
