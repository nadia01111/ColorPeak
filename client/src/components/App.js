import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";




const App = () => {
  return (
 
    <BrowserRouter>
    <Header />
    <h1>My app</h1>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
