import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound';
import AddProducts from './Pages/AddProducts/AddProducts';
import MyOrder from './Pages/MyOrder/MyOrder';
import Purchase from './Pages/Purchase/Purchase';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrders from './Pages/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/addProducts">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/notFound">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
