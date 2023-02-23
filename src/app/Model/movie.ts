export interface Movie {
  dates: {};
  page: number;
  results?: [] | null;
  total_pages: number;
  total_results: number;
}

export interface ResultsMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
