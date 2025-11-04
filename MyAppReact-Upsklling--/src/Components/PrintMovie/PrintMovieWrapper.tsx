import type { JSX } from "react";
import { useParams } from "react-router";
import useMovies from "../../hooks/useMovie";
import PrintMovie from "./PrintMovie";

function PrintMovieWrapper():JSX.Element{
const {id} = useParams<{id: string}>();
const {movies,loading, error} = useMovies()

if (loading) return<p>Cargando</p>
if (error)return <p>Error:{error}</p>

const movie = movies.find((m)=> m.movieId ==Number(id));

return movie ? <PrintMovie movie={movie}/>:<p>Movie not Found</p>
}
export default PrintMovieWrapper;