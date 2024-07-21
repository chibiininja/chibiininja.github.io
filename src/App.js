import "./App.css";

// importing components from react-router-dom package
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
import Home from "./components/Home";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Recommendations from './components/Recommendations';
 
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
                            path="/projects"
                            element={<Projects />}
                        />
                        <Route
                            path="/interests"
                            element={<Interests />}
                        />
                        <Route
                            path="/recommendations"
                            element={<Recommendations />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}
 
export default App;