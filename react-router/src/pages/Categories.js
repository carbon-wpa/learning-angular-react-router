import React from "react";
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import SubCategories from "./SubCategories";


function Categories() {
    return (
        <Router>
            <div>
                <h2>Categories</h2>
                <ul>
                    <Link to="/categories/subcategories">
                        <li>load categories</li>
                    </Link>
                </ul>
                <Switch>
                    <Route path="/categories/subcategories" component={SubCategories}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Categories;
