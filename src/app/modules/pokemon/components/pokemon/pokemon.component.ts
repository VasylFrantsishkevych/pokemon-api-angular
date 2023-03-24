import {Component, Input, OnInit} from '@angular/core';
import {IPokemonDetails} from "../../interfaces";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemon: IPokemonDetails;

  constructor() {
  }

  ngOnInit(): void {
    }

    changeBGColor(name: string) {
      if (name === 'grass') {
        return 'bg-grass'
      } else if (name === 'poison') {
        return 'bg-poison'
      }else if (name === 'fire') {
        return 'bg-fire'
      }else if (name === 'flying') {
        return 'bg-flying'
      }else if (name === 'water') {
        return 'bg-water'
      }else if (name === 'normal') {
        return 'bg-normal'
      }else if (name === 'electric') {
        return 'bg-electric'
      }else if (name === 'ground') {
        return 'bg-ground'
      }else if (name === 'fighting') {
        return 'bg-fighting'
      }else if (name === 'psychic') {
        return 'bg-psychic'
      }else if (name === 'rock') {
        return 'bg-rock'
      }else if (name === 'steel') {
        return 'bg-steel'
      }else if (name === 'ice') {
        return 'bg-ice'
      }else if (name === 'ghost') {
        return 'bg-ghost'
      }else if (name === 'dragon') {
        return 'bg-dragon'
      }else {
        return 'bg-dark'
      }
    }
}
