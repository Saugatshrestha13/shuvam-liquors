import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...props }) => {
    const admin = useSelector((state) => state.user.currentUser);
    const isAdmin = admin?.isAdmin || null;
    if (!isAdmin) {
        return (
            <Route {...props} component={Component} />

        );
    } else {
        return <Redirect to={'/'} />
    }
};

export default PublicRoute;
