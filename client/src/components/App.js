import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Collages from "./Collages";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";
import NavBar from "./NavBar";
import UserPage from "./User/UserPage";
import LogIn from "./Account/LogIn";




const App = () => {
  return (
 
    <BrowserRouter>
    <GlobalStyles/>
      <Header />
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/account/login" element={<LogIn/>}/>
        <Route path="users/:userID" element={<UserPage/>}/>
        <Route path="/collages" element={<Collages/>}/>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
