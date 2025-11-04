import { useContext } from "react";
import type { UserContextType } from "../types/user";
import { UserContext } from "../context/UserContext";


function useUser():UserContextType {

    const context = useContext(UserContext);
    if(!context){
        throw new Error ("useUser debe usarse dentro del provider");
    }
    return context;

}
export default useUser