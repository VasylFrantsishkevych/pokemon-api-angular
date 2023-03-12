import {Component, Input, OnInit} from '@angular/core';
import {IResults} from "../../interfaces";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemon: IResults;

  constructor() {
  }

  ngOnInit(): void {
    }
}
