import { Routes, Route} from "react-router-dom";
import './App.css';
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Blog/Login/Login";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Share/Footer";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="blog" element={<Blog></Blog>}></Route>
       <Route path="login" element={<Login></Login>}></Route>
       <Route path="/service/:serviceId" element={<Purchase></Purchase>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
