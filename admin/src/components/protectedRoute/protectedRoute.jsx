import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const admin = useSelector((state) => state.user.currentUser);
  const isAdmin = admin?.isAdmin || null;
  if (isAdmin) {
    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Route {...props} render={(props) => <Component {...props} />} />
        </div>
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
