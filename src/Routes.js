import React from "react";
import { Route, Switch } from "react-router-dom";
import Book from "./Books";
import Home from "./Homes";



import Home from "./Homes";


export default function Routes() {
    return (
        <Switch>

            <Route path="/books" component={Book} />

        </Switch>
    );
}
