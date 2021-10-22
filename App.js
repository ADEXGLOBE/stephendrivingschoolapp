import React from "react";
import logo from './logo.svg';
import './App.css';

import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import history from "./history";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import Home from "./Home";
// import styled from "styled-components";
// import { AccountBox } from './components/accountBox';


// const AppContainer = styled.div

//   width: "100%";
//   height: "100%";
//   display: "flex";
//   flexDirection: "column";
//   alignItems: "center";
//   justifyContent: "center";


function App() {
  
  return (

    <Router history={history}>
    <div className="App">
       <Route component={Navbar} />

       <Route exact path="/" component={Home} />
       {/* <Route path="/Forms" component={Forms} />
       <Route path="/Earlyintervention" component={Earlyintervention} />
       <Route path="/Serviceprovider" component={Serviceprovider} /> */}
       <Route path="/Login" component={Login} />
       <Route path="/SignUp" component={SignUp} />
       <Route path="/Dashboard" component={Dashboard} />
       <Route path="/ForgotPassword" component={ForgotPassword} />
       {/* <Route path="/billingform" component={billingform} /> */}
       <Route path="/ContactUs" component={ContactUs} />
       
      <Route component={Footer} />
        </div>
    
    </Router>
  
  // <AppContainer>

  //  <AccountBox />

  //  </AppContainer>;
  );

}

export default App;
