import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext} from "./contexts/UserContext";

export default function Routes(){
    const {username,id} = useContext(UserContext);
    // console.log(username);

    if(username){
        return 'logged in !!!!'+ username;
    }
    return(
        <RegisterAndLoginForm/>
    )
}