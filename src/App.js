import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products'
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import About from './Components/About Us/About';
import Error from './Components/Error/Error';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
     
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/products'>
            <Products></Products>
          </PrivateRoute>
          <Route path='/about'>
            <About></About>
          </Route>
          <PrivateRoute path='/services/:id'>
           <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
            </Route>
          <Route path='/signUp'>
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
     
     </AuthProvider>
    </div>
  );
}

export default App;
