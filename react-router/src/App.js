import React from "react";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import {Route, Link, BrowserRouter as Router, Switch, useHistory} from "react-router-dom";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";


function Navigate() {
 const history = useHistory();

 function handleClick(){
     history.push("/contact");
 }

 return (
     <div>
         <button onClick={handleClick}>Navigate</button>
     </div>
 )
}

function App() {
    return (
        <Router>
            <div>
                <h1>App Component</h1>
                <Navigate />
                <ul>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/terms">
                        <li>Terms</li>
                    </Link>
                    <Link to="/product/123">
                        <li>Product</li>
                    </Link>
                    <Link to="/categories">
                        <li>Categories</li>
                    </Link>
                </ul>
                <Switch>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/terms" component={Terms}/>
                    <Route path="/product/:id" component={Product}/>
                    <Route path="/categories" component={Categories} />
                    <Route component={NotFound}/>
                </Switch>
                <div>
                    this is a footer
                </div>
            </div>
        </Router>
    );
}

export default App;
