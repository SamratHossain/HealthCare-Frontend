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
import DoctorProfile from "./Screen/DoctorProfile";
import Qualification from "./Screen/Qualification";
import Experience from "./Screen/Experience";
import Availability from "./Screen/Availability";
import ConsultationFee from "./Screen/ConsultationFee";
import NidCard from "./Screen/NidCard";
import Done from "./Screen/Done";
import UpdatePersonalInfo from "./Screen/DoctorScreen/UpdatePersonalInfo";
import UpdateDoctorInfo from "./Screen/DoctorScreen/UpdateDoctorInfo";
import UpdateQualification from "./Screen/DoctorScreen/UpdateQualification";
import UpdateExperience from "./Screen/DoctorScreen/UpdateExperience";
import DoctorChat from "./Screen/DoctorScreen/DoctorChat";

import PatientHome from "./Screen/PatientScreen/PatientHome";
import DoctorsCategory from "./Screen/PatientScreen/DoctorsCategory";
import SearchCategory from "./Screen/PatientScreen/SearchCategory";
import DoctorsList from "./Screen/PatientScreen/DoctorsList";
import DoctorProfileInfo from "./Screen/PatientScreen/DoctorProfileInfo";
import Chat from "./Screen/PatientScreen/Chat";

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
              <Route exact path="/doctor/profile/update-personal-info"> <UpdatePersonalInfo /> </Route>
              <Route exact path="/doctor/profile/update-doctor-info"> <UpdateDoctorInfo /> </Route>
              <Route exact path="/doctor/profile/update-qualification"> <UpdateQualification /> </Route>
              <Route exact path="/doctor/profile/update-experience/:id"> <UpdateExperience /> </Route>
              <Route exact path="/doctor/signup/qualification"> <Qualification /> </Route>
              <Route exact path="/doctor/signup/experience"> <Experience /> </Route>
              <Route exact path="/doctor/signup/availability"> <Availability /> </Route>
              <Route exact path="/doctor/signup/consultationfee"> <ConsultationFee /> </Route>
              <Route exact path="/doctor/signup/nidcard"> <NidCard /> </Route>
              <Route exact path="/doctor/signup/done"> <Done /> </Route>
              <Route exact path="/doctor/doctor-chat"> <DoctorChat /> </Route>

              <Route exact path="/patient/home"> <PatientHome /> </Route>
              <Route exact path="/patient/doctors-category"> <DoctorsCategory /> </Route>
              <Route exact path="/patient/search-result"> <SearchCategory /> </Route>
              <Route exact path="/patient/doctor-list"> <DoctorsList /> </Route>
              <Route exact path="/patient/doctorprofile-info/:id"> <DoctorProfileInfo /> </Route>
              <Route exact path="/patient/chat/:id"> <Chat /> </Route>
            </Switch>
        </BrowserRouter> 
      </div>
    </Provider>
  );
}

export default App;
