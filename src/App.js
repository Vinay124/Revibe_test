import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Myroutines from "./Pages/Myroutines";
import Dashboard from "./Pages/Dashboard"
import Register from "./Pages/Register"
import Split_squats from "./Pages/Split_squats"
import StrengthTraining from "./Pages/StrengthTraining";
import Upnext from "./Pages/Upnext";
import Workoutstats from "./Pages/Workoutstats"

function App() {
  return(
    <>
    <Router>
          <Switch>
            <Route path="/" component={Dashboard} exact></Route>
            <Route path="/my_routines" component={Myroutines}></Route>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route path="/StrengthTraining" component={StrengthTraining}></Route>  
            <Route path="/Split_squats" component={Split_squats}></Route>
            <Route path="/Upnext" component={Upnext}></Route>
            <Route path="/Workoutstats" component={Workoutstats}></Route>
          </Switch>
      </Router>
  </>
  )
}

export default App;