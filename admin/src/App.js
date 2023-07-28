import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import PublicRoute from "./components/publicRoute/publicRoute";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
        <ProtectedRoute exact path="/">
          <Home />
        </ProtectedRoute>
        <ProtectedRoute exact path="/users">
          <UserList />
        </ProtectedRoute>
        <ProtectedRoute path="/user/:userId">
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/products">
          <ProductList />
        </ProtectedRoute>
        <ProtectedRoute path="/product/:productId">
          <Product />
        </ProtectedRoute>
        <ProtectedRoute path="/newproduct">
          <NewProduct />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
