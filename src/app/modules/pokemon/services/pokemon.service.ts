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

  getAll(limit: number, offset: number): Observable<IPokemonResponse> {
    return this.httpClient.get<IPokemonResponse>(`${urls.pokemon}?limit=${limit}&offset=${offset}`);
  }

  getDetails(url: string): Observable<IPokemonDetails> {
    return this.httpClient.get<IPokemonDetails>(url)
  }
}
