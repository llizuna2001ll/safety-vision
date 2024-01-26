import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Navbarr from "./components/Navbar";
import Societe from "./pages/Societe";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import FaceShapeDetector from "./pages/FaceShapeDetector";
import NotFound from "./pages/NotFound";

function App() {
    return (

        <div className="App">

            <Router>
                <Navbarr/>
                <div>
                    <SmoothScroll>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/societe" element={<Societe/>}></Route>
                            <Route path="/face" element={<FaceShapeDetector/>}></Route>
                            <Route  path={"*"} element={<NotFound/>}></Route>
                        </Routes>
                    </SmoothScroll>
                </div>
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
