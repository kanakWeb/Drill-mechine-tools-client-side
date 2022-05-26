import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Share/Footer";
import Navbar from "./Pages/Share/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyPurchase from "./Pages/Dashboard/MyPurchase";
import AddReviews from "./Pages/Dashboard/AddReviews";
import AllUser from "./Pages/Dashboard/AllUser";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import NotFound from "./Pages/Share/NotFound";
import Services from "./Pages/Home/Services";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyPurchase></MyPurchase>}></Route>
          <Route
            path="review"
            element={<AddReviews></AddReviews>}
          ></Route>
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <AllUser></AllUser>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
