import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Myroutines from "./Pages/Myroutines";
import Dashboard from "./Pages/Dashboard"
import Register from "./Pages/Register"
import Login from "./Components/login"
import Split_squats from "./Pages/Split_squats"
import StrengthTraining from "./Pages/StrengthTraining";


function App() {
  return(
    <>
    <Router>
          <Switch>
            <Route path="/" component={Login} exact></Route>
            <Route path="/my_routines" component={Myroutines}></Route>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route path="/StrengthTraining" component={StrengthTraining}></Route>  
            <Route path="/Split_squats" component={Split_squats}></Route>
          </Switch>
      </Router>
  </>
  )
}

export default App;