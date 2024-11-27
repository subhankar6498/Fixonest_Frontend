import "./Components.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Wrapper from "./Layout/Wrapper";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Testimonials from "./Pages/Testimonials";
import Service from "./Pages/Service";
import BookingForm from "./Pages/BookingForm";
import CategoryWiseService from "./Pages/CategoryWiseServices";
import EmailVerification from "./Pages/EmailVerification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { check_token } from "./Redux/AuthSlice";
import ServiceDetails from "./Pages/ServiceDetails";
import Profile from "./Pages/Profile";
import UpdatePassword from "./Pages/UpdatePassword";
import ForgotPWbyEmail from "./Pages/ForgotPWbyEmail";
import ResetPW from "./Pages/ResetPW";

function App() {
  const queryclient = new QueryClient();
  const dispatch = useDispatch();

  function PrivateRoute({ children }) {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined && token !== "" ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  const public_route = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/about",
      component: <About />,
    },
    {
      path: "/services",
      component: <Service />,
    },
    {
      path: "/service/details/:id",
      component: <ServiceDetails />,
    },
    {
      path: "/service/category/:id",
      component: <CategoryWiseService />,
    },
    {
      path: "/team",
      component: <Team />,
    },
    {
      path: "/testimonials",
      component: <Testimonials />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },
    {
      path: "/register",
      component: <Registration />,
    },
    {
      path: "/api/confirmation/:id/:email/:token",
      component: <EmailVerification />,
    },
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/forgot_password",
      component: <ForgotPWbyEmail />,
    },
    {
      path: "/password-confirmation/:email/:token",
      component: <ResetPW />,
    },
  ];

  const private_route = [
    {
      path: "/password/update",
      component: <UpdatePassword />,
    },
    {
      path: "/profile",
      component: <Profile />,
    },
    {
      path: "/booking/:id",
      component: <BookingForm />,
    },
  ];

  useEffect(() => {
    dispatch(check_token());
  }, []);
  return (
    <>
      <ToastContainer />

      <QueryClientProvider client={queryclient}>
        <Router>
          <Wrapper>
            <Routes>
              {public_route.map((route) => (
                <Route path={route.path} element={route.component} />
              ))}
              {private_route.map((route) => (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route.component}</PrivateRoute>}
                />
              ))}
            </Routes>
          </Wrapper>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
