import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewPost from "./components/Content/Posts/NewPost/NewPost";


let postsArray = [
    {id: 1, message: "New gallery", likes: "30"},
    {id: 2, message: "It is my new post", likes: "12"}
];

let postsElements = postsArray.map(el => <NewPost message={el.message} likes={el.likes}/>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsElements}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
