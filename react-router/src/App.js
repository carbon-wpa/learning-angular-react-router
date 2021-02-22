import React from "react";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import {Route, Link, BrowserRouter as Router, Switch, useHistory} from "react-router-dom";


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
                </ul>
                <Switch>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/terms" component={Terms}/>
                </Switch>
                <div>
                    this is a footer
                </div>
            </div>
        </Router>
    );
}

export default App;
