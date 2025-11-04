import type { RouteObject } from "react-router";
import MovieList from "../Components/PrintMovie/MovieList";
import UserForm from "../Components/userForm/userForm";
import PrintMovieWrapper from "../Components/PrintMovie/PrintMovieWrapper";
import Main from "../Components/layout/main";
import PageNotFound from "../Components/layout/pageNotFound";
import { Container } from "react-bootstrap";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [
      /* Esto del chinldren no se por que se tiene que usar */

      {
        index: true,
        element: (
          <Container
            fluid
            className="d-flex flex-column justify-content-center"
          >
            <h1>Main Page</h1>
            <p>Welcome</p>
          </Container>
        ),
      },
      {
        path: "/movies",
        element: <MovieList />,
      },
      {
        path: "/movies/:id",
        element: <PrintMovieWrapper />,
      },
      {
        path: "/user-form",
        element: <UserForm />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  /*
{
    path:"/movies/:id",
    element:<PrintMovieWrapper />

},
{
    path:"/user-form",
    element:<UserForm />
    
},
{
    path:"*",
    element:<p>peish No faun</p>
    
},*/
];
