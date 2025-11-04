/*
State } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import { useRoutes } from 'react-router'
import './App.css'
import MovieList from './Components/PrintMovie/MovieList'
import PrintMovie from './Components/PrintMovie/PrintMovie'
import UserForm from './Components/userForm/userForm'
import { mockMovie,movieList } from './mocks/movie.mocks'
import { appRoutes } from './routes/routes'
import { Suspense } from 'react'
import Main from './Components/layout/main'
import 'bootstrap/dist/css/bootstrap.min.css'
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */
function App() {

  const routing =useRoutes(appRoutes);

 return (
 /* <>
   <div></div>
  
   <h1>
    <PrintMovie movie=
    {  
       {
        movieId: 1,
        title:'movie',
        description:'Good Movie',
        pictureUrl:'http',
        releaseDate: new Date('1950-10-25')
        }
      }
    />
    
    </h1>

    <h1>Catalogo de Pelis chidas ACC</h1>
    <MovieList movies= {movieList}></MovieList>
    <hr/>
    <h1>
      <PrintMovie movie= {mockMovie}></PrintMovie>
    </h1>
   
     { movieList
     .filter((movie)=> movie.releaseDate.getFullYear() >= 2024)
     .map((movie)=>
      <PrintMovie movie= {movie}></PrintMovie>
     )}

    { movieList
     .map((movie)=>(
        movie.description.includes("to") ?
      <PrintMovie movie= {movie}></PrintMovie>:<p>no dtiene love</p>
     ))}
     <div>

      <h2>

        Formulario del usuario
      </h2>
      <UserForm/>
     </div>
     
  </>
*/

<>

<h1>Catalogo de Pelis</h1>
<hr/>
<Suspense fallback={ <p>Loading...</p>}>{routing}</Suspense> 





</>


 )
}

export default App
