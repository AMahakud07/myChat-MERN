
import axios from "axios";
import { UserContextProvider } from "./contexts/UserContext";
import { useContext } from "react";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = "http://localhost:4040"
  axios.defaults.withCredentials = true;
  
  return (
    <>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </>
  )
}

export default App
