import type { Movie } from "../types/movie";

export interface useMoviesResult{
        loading: boolean;
        movies: Movie[],
        showRecent: boolean
        toggleShowRecent:()=>void;  
        error:string | null;

}