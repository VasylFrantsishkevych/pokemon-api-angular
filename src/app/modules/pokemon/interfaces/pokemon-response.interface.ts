export interface IPokemonResponse<R> {
  count: number;
  next: string | null;
  previous: string | null;
  results: R[];
}
