import { useState, type JSX, type ReactNode } from "react";
import {UserContext} from "../context/UserContext";

function userProvider ({children}: {children: ReactNode} ):JSX.Element{
const [username] = useState("Francisco Pantera");

return(

<UserContext.Provider value = {{username}}>
{children}
</UserContext.Provider>
)
}

export default userProvider