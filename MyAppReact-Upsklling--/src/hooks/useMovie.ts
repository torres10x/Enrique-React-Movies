import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { useMoviesResult } from "./types";

function useMovies() :useMoviesResult{
    /*function useMovies(MovieListProps: Movie[]) :useMoviesResult{*/
  const [showRecent, setShowRecent] =useState<boolean>(false);
  const [loading, setloading] =useState<boolean>(true);
  const [movieData, setmovieData] =useState<Movie[]>([]);
   const [error, setError] =useState<string | null >(null);

 /* useEffect (()=>{
        setTimeout(()=>{
            setmovieData(MovieListProps);
             setloading(false);
        },2000)
    },[MovieListProps]);
*/
useEffect(() =>{
    const controller= new AbortController();
    async function fetchMovies() {
        try{
            setloading(true);
            setError(null);
            /*con axio
             const res = api.get("https://app-react-course-bk.azurewebsites.net/api/movie/catalog",
             */
            const res = await fetch("https://myapp-react-bk.azurewebsites.net/api/Movie/catalog",
              {signal: controller.signal}/*que pets*/
            );

            /*este pex no se ocupa con axio*/ 
        if (!res.ok){
            throw new Error(`HTTP ${res.status}- ${res.statusText}`);
        }
 /*este pex no se ocupa con axio
 const data = await res.json(); se sustotuye con 
 const data = res.data as Array<Movie>;
 */ 
        const data = await res.json();
        const normalized:Movie[] = data.map((movie: Movie)=> ({
            ...movie, 
            releaseDate: new Date(movie.releaseDate)
        }))
        setmovieData(normalized);

        }

        /*con axio
        catch (err:any){
         if((err?.name ==='AbortError'|| err.code==="ERR_CANCELLED"){
         const message = err?.response?.data?.message ?? "unknow"
        }
        
        
        */ 
        catch(err: unknown){
            if((err as any)?.name==='AbortError'){
                return; }
                setError(err instanceof Error ? err.message: "fallo")         


        }
        finally{
            setloading(false)
        }
    }
fetchMovies();
return () =>controller.abort();
},[]);

   const filteredMovies = useCallback(() =>{

        return showRecent
        ? movieData.filter((movie: Movie)=> movie.releaseDate.getFullYear() >= 2028)
    :movieData;
    },[showRecent, movieData]);    
    return{
        loading,
        movies: filteredMovies(),
        showRecent,
        toggleShowRecent: ()=> setShowRecent(()=>!showRecent),
        error,
    }
}
export default useMovies;