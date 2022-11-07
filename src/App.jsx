import {Route, Routes} from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./navbar";
import Journey from "./Journey";
import Interests from "./Interests";
import Contact from "./Contact";



function App() {

    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="Journey" element={<Journey />}></Route> 
                <Route path="Interests" element={<Interests />}></Route> 
                <Route path="Contact" element={<Contact />}></Route> 
            </Routes>
           
            <Footer/>
        </div>
    );
}

export default App;