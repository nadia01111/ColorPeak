import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";




const App = () => {
  return (
 
    <BrowserRouter>
    <GlobalStyles/>
    <Header />
    <h1>My app</h1>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
