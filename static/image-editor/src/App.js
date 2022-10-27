import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {//start screen
  return (
    <div className="App">   
      <header>
        <div className="title">Image-Editor</div>
      </header>
      
      <div class="box">
        <input type="email" placeholder="ID" />
        <input type="password" placeholder="Password" />
        <button className="btn-hover-color">로그인</button>
        <button className="btn-hover-color">회원 가입</button>

      </div>

  
    </div>
  );
}

function Login(){//login screen
  return(
    <div>
    
    
    </div>
  )
}

function SignUp(){//signup screen
  return(
    <div>

    </div>
  )
} 
export default App;
