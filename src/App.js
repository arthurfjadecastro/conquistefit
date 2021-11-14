
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/conquiste-fit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";
// pages
import { Home, Ranking } from "./views";
import Regulation from "./views/Regulation";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                  <Route  path="/home" component={Home} />

                    {/*<Route path="/home" render={(props) => <Home {...props} />} />*/}
                    {/*<Redirect to="/" />*/}
                    {/*<Route  path="/ranking" component={Ranking} />*/}
                    <Route  path="/regulation" component={Regulation} />
                  <Route path="/">
                    <Redirect to="/home" />
                  </Route>
                </Switch>
            </BrowserRouter>,
        </div>
    );
};

export default App;

