import {IResults} from "./pokemon-results.interface";

export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResults[];
}
