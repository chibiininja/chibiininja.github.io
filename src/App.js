import logo from './logo.svg';
import "./App.css";

// importing components from react-router-dom package
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
 
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/contactus"
                            element={<ContactUs />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                    </Routes>
                </Router>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}
 
export default App;