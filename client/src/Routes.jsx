import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext} from "./contexts/UserContext";
import Chat from "./components/Chat";

export default function Routes(){
    const {username,id} = useContext(UserContext);
    // console.log(username);

    if(username){
        return <Chat/>
    }
    return(
        <RegisterAndLoginForm/>
    )
}