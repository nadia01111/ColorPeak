import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Palettes from "./Collages/Palettes";
import CreateCollage from "./Collages/CreateCollage";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";
// import NavBar from "./NavBar";
import UserPage from "./User/UserPage";
import LogIn from "./Account/LogIn";
import CreateAccount from "./Account/CreateAccount";




const App = () => {
  return (
 
    <BrowserRouter>
    <GlobalStyles/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/account/login" element={<LogIn/>}/>
        <Route path="/account/create" element={<CreateAccount/>}/>
        <Route path="/users/:userID" element={<UserPage/>}/>
        <Route path="/palettes" element={<Palettes/>}/>
        <Route path="/palettes/create" element={<CreateCollage/>}/>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
