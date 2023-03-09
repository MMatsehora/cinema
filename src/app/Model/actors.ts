import { Cast } from "./cast";

export interface Actors {
  id: number;
  cast?: Cast[] | null;
  crew?: [] | null;
}
