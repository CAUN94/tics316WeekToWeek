import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <>
    <NavBar />
    <div className="container mt-4">
      <Outlet />
    </div>
    </>
  )
};

export default Layout;
