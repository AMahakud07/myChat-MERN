import { useContext } from "react";
import Register from "./Register";
import { UserContext} from "./contexts/UserContext";

export default function Routes(){
    const {username,id} = useContext(UserContext);
    // console.log(username);

    if(username){
        return 'logged in';
    }
    return(
        <Register/>
    )
}