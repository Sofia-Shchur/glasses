import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Gallery from "./components/Photos/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/content" element={<Content/>}/>
                        <Route path="/gallery" element={<Gallery/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
