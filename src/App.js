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
import DoctorProfile from "./Screen/DoctorProfile";
import Qualification from "./Screen/Qualification";
import Experience from "./Screen/Experience";
import Availability from "./Screen/Availability";
import ConsultationFee from "./Screen/ConsultationFee";
import NidCard from "./Screen/NidCard";
import Done from "./Screen/Done";

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
              <Route exact path="/doctor/signup/qualification"> <Qualification /> </Route>
              <Route exact path="/doctor/signup/experience"> <Experience /> </Route>
              <Route exact path="/doctor/signup/availability"> <Availability /> </Route>
              <Route exact path="/doctor/signup/consultationfee"> <ConsultationFee /> </Route>
              <Route exact path="/doctor/signup/nidcard"> <NidCard /> </Route>
              <Route exact path="/doctor/signup/done"> <Done /> </Route>
            </Switch>
        </BrowserRouter> 
      </div>
    </Provider>
  );
}

export default App;
