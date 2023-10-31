import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div class="m-4">
        <h1><Link to="/">Web Apis</Link></h1>
      <Outlet />
    </div>
    </>
  )
};

export default Layout;
