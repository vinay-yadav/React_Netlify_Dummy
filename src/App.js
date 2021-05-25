import './App.css';
import Home from './components/Home/Home';
import About from './components/AboutUs/AboutUs';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/"} exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"} exact>About</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <Route path={"/"} exact render={() => <Home>Welcome</Home>}/>
            <Route path={"/about"} exact render={() => <About>About Us</About>}/>
        </div>
    );
}

export default App;
