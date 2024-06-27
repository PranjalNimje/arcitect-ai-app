import { Outlet } from "react-router-dom";
import Header from "../../pages/Header";

const Layout = () => {
  // const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // const arr = ["qwe", "rty", "asdf", "wefghjk", "sdfgh"];
  return (
    <div>
      <Header />
      {/* {isSidebarVisible && (
        <div className="Sidebar">
          {arr?.map((item) => (
            <ul>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      )} */}
      <Outlet />
    </div>
  );
};

export default Layout;
