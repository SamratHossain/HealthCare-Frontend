import {BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

import Home from "./Screen/Home";
import Select from "./Screen/Select";
import DoctorSignup from "./Screen/DoctorSignup";
import PatientSignup from "./Screen/PatientSignup";
import Login from "./Screen/Login";
import DoctorHome from "./Screen/DoctorHome";
import PatientHome from "./Screen/PatientHome";
import UserCheck from "./Screen/UserCheck";
import DoctorProfile from "./Screen/DoctorProfile";
import Qualification from "./Screen/Qualification";

const App = () => {
  return (
    <Provider store={store}>
      <div> 
        <BrowserRouter>
            <Switch>
              <Route exact path="/"> <Select /> </Route>
              <Route exact path="/home"> <Home /> </Route>
              <Route exact path="/doctor/signup"> <DoctorSignup /> </Route>
              <Route exact path="/patient/signup"> <PatientSignup /> </Route>
              <Route exact path="/login"> <Login /> </Route>
              <Route exact path="/doctor/home"> <DoctorHome /> </Route>
              <Route exact path="/doctor/profile"> <DoctorProfile /> </Route>
              <Route exact path="/patient/home"> <PatientHome /> </Route>
              <Route exact path="/usercheck"> <UserCheck /> </Route>
              <Route exact path="/doctor/signup/qualification"> <Qualification /> </Route>
            </Switch>
        </BrowserRouter> 
      </div>
    </Provider>
  );
}

export default App;
