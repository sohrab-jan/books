import React, {Component} from "react";
import "./App.css";
import {Redirect, Route, Switch} from "react-router-dom";
import Movies from "./components/movies";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import Customers from "./components/Customers";
import Navbar from "./components/Navbar";
import MovieForm from "./components/MovieForm";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>

                <main className="container">
                    <Switch>
                        <Route path="/movies/:id" component={MovieForm}/>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/customers" component={Customers}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect from="/" exact to="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </React.Fragment>

        )

    }
}

export default App;
