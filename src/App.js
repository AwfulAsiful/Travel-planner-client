import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
import Plans from './Components/Plans/Plans';
import AddPlan from './Components/AddPlan/AddPlan'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AllPlans from './Components/AllPlans/AllPlans';



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
         <Route path='/plans'>
           <Plans></Plans>
         </Route>
         <Route path='/allPlans'>
           <AllPlans></AllPlans>
         </Route>
          <PrivateRoute exact path='/placeOrder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          
         <PrivateRoute path='/myOrders/:email'>
           <MyOrders></MyOrders>
           </PrivateRoute>
          <PrivateRoute path='/allOrders'>
          <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path='/addPlans'>
            <AddPlan></AddPlan>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
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
