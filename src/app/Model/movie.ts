import { ResultsMovie } from "./results-movie";

export interface Movie {
  dates: {};
  page: number;
  results?: ResultsMovie[] | null;
  total_pages: number;
  total_results: number;
}
