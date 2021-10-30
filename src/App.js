
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/conquiste-fit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";
// pages
import { Home } from "./views";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/index" render={(props) => <Home {...props} />} />
                    {/*<Route*/}
                    {/*    path="/landing-page"*/}
                    {/*    render={(props) => <LandingPage {...props} />}*/}
                    {/*/>*/}
                    <Redirect to="/index" />
                </Switch>
            </BrowserRouter>,
        </div>
    );
};

export default App;

