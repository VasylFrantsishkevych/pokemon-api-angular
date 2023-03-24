import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemonDetails, IPokemonResponse} from "../interfaces";
import {urls} from "../../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPokemonResponse> {
    return this.httpClient.get<IPokemonResponse>(urls.pokemon)
  }

  getDetails(url: string): Observable<IPokemonDetails> {
    return this.httpClient.get<IPokemonDetails>(url)
  }
}
