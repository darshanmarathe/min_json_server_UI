import Admin from "./Admin";
import LoginPage from "./LoginPage";
import { Route, Routes} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  let userAuthorised = useSelector((state) => state.authoriseUser);
  return (<>
  <Routes>
  <Route path = "/" element = {<LoginPage/>}></Route>
  <Route path = '/admin/*' element = {<Admin authenticated = {userAuthorised}/> }> 

  </Route> 
 
    </Routes>
  </>
  );
}

export default App;
