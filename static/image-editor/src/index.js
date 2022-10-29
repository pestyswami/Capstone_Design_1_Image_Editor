import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//react router 관련
import {render} from "react-dom";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Register from './Register';
import Editor from './Editor';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<Register />} />
      <Route path="editor" element={<Editor />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );