import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemonResponse, IResults} from "../interfaces";
import {urls} from "../../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPokemonResponse<IResults>> {
    return this.httpClient.get<IPokemonResponse<IResults>>(urls.pokemon)
  }


}
