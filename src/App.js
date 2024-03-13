import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import AllGallery from "./components/Photos/Gallery/AllGallery";
import Contacts from "./components/Contacts/Contacts";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(props) {
    const state = props.state.contentPage.postsArray;
    const text = props.state.contentPage.newPostText;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Content posts={state} addPost={props.addPost} newPostText={text} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/gallery/*" element={<AllGallery/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
