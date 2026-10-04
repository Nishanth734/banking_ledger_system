/** @format */

import { Header } from "./components/header";
import Footer from "./components/footer";
import { Body } from "./components/body";
import About from "./components/about";
import { createBrowserRouter, Outlet,useParams } from "react-router-dom";
import { Carddetails } from "./components/Carddetails";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/user/:id",
        element:<Carddetails/>
      }
    ]
  },
]);

export default approuter;
