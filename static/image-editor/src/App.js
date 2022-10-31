import './App.css';
import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {//start screen, 로그인 화면

  return (
    
    <div className="App">   
      
      <Link to={{
          pathname : "/editor",
          state : {
                    id:null, 
                    password :null //id, password 값 패러미터로 넘겨줌, 페이지 이동
                    }
          }}>
          <button>에디터</button>
        </Link> 
      
      
      {/* <header>
        <div className="title">Image-Editor</div>
      </header>
      
      <div className="box">
        <input type="id" placeholder="ID" />
        <input type="password" placeholder="Password" />      
        <button type = "submit" className="center">로그인</button> 
        <Link to={{
          pathname : "/register",
          state : {
                    id:null, 
                    password :null //id, password 값 패러미터로 넘겨줌
                    }
          }}>
          <button>회원 가입</button>
        </Link> </div> */}
        {/* 회원가입 화면, register로 */}  
    </div>
  );
//main에도 props로 회원 정보 전달해야 함


};
export default App;
//<Link to="/editor">Editor</Link> 페이지 전환하면서 props전달하도록 해야 함. 
{/* <Link to={{
  pathname : "/register",
  state : {
           id:dd, 
           password :dd //id, password 값 패러미터로 넘겨줌
           }
 }}>
 <button className="btn-hover-color">회원 가입</button>
</Link> */} //router 형식