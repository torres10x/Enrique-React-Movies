import type { JSX } from "react";

import type { movieProps } from "./types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function PrintMovie({ movie }: movieProps): JSX.Element {
  return (
    /*
    <h3>ID:{movie.movieId}</h3>
<h3>Tite: {movie.title}</h3>
<div>
    <img 
    src={movie.pictureUrl} 
    alt="" 
    style={{width:"200px", height:"auto"}}/>
   </div>
<h3>Description: {movie.description}</h3>
<h3>Release Date:{movie.releaseDate.toString()}</h3>

*/
    <>
      <Card style={{ width: "19rem" }}>
        <Card.Img
          variant="top"
          src={movie.pictureUrl}
          alt=""
          style={{ width: "300px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle>
            {movie.releaseDate.toISOString().split("T")[0]}
          </Card.Subtitle>
          <Card.Text>{movie.description}</Card.Text>
          <Link to={`/movies/${movie.movieId}`}></Link>
          <Button variant="primary">Comprar/Rentar</Button>
        </Card.Body>
        <Card.Footer>ID#: {movie.movieId}</Card.Footer>
      </Card>
    </>
  );
}

export default PrintMovie;
