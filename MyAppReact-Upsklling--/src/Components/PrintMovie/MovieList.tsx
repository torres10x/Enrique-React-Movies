import { type JSX } from "react";
import type { MovieListProps } from "./types";
import type { Movie } from "../../types/movie";
import PrintMovie from "./PrintMovie";
import useUser from "../../hooks/useUser";
import useMovies from "../../hooks/useMovie";
import { Button, Col, Container, Row } from "react-bootstrap";

function MovieList(): JSX.Element {
  /* function MovieList ({movies}:MovieListProps):JSX.Element{*/

  const { username } = useUser();
  const {
    loading,
    showRecent,
    movies: filteredMovies,
    toggleShowRecent,
  } = useMovies();
  /*const{loading,showRecent,movies: filteredMovies,toggleShowRecent}= useMovies(movies)  */

  if (loading) {
    return <p>cargando pelis..</p>;
  }

  return (
    <>
      <Container className="my-4">
        <Button onClick={toggleShowRecent}>
          {showRecent ? "Mostrar todas las pelis " : "Mostrar las recientes"}
        </Button>
        
        <div className="d-flex justify-content-between">
            <p style={{ backgroundColor: "blue", color: "white" }}>
          Hellou {username}
        </p>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie: Movie) => (
              <Col key={movie.movieId} className="d-flex">
                <PrintMovie movie={movie} />
              </Col>
            ))
          ) : (
            <p>no hay nada nuevo</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default MovieList;
