import type { JSX } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Main():JSX.Element{
return(
<>
<Header title="Pelis"/>

<main className="flex-grow-1">
<Outlet/>
</main>
<Footer  title="PelisFooter"/>
</>

)


}

export default Main