import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="w-screen h-screen bg-main bg-cover bg-center">
      <Outlet />
    </div>
  );
};

export default Layout;
