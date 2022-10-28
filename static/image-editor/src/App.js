import './App.css';
import React,{useState} from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


function App() {//start screen, 로그인 화면

    const fetchLogin = async ({ id, password }) => {
    const response = await fetch("http://localhost:8888/users");//로그인 서버로부터 fetch
  
    if (response.ok) {
        //서버통신이 성공적으로 이루어지면 users에 json값 대입
      const users = await response.json();
  
      //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받은 account의 id값과 비교
      //서로 일치하는 것만 user에 대입
      const user = users.find((user) => user.id === id);
      //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
      if (!user || user.password !== password) {
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
  
      //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
      //form 컴포넌트에서 setUser값에 넣어야함
      return user;
    }
  
    //서버 통신이 안이루어졌을떄
    throw new Error("서버 통신이 원할하지 않습니다.");
  };

  function LoginForm() {
    
      //url 이동을 위한 useHistory
      //const history = useHistory(); navigate로
    
      //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
      const [account, setAccount] = useState({
        id: "",
        password: "",
      });
    
      //input에 입력하면 자동적으로 account state값 변경
      const onChangeAccount = (e) => {
          //...을 이용하여 account의 복사본을 만들고
          //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
          //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
      };
    
      //동기식으로 로그인정보를 통신하여 출력
      const onSubmitAccount = async () => {
        try {
          const user = await fetchLogin(account);
    
          //성공하면 해당 user 아이디 패스워드값 셋팅
          //setUser(user);
          //성공하면 해당 url로 이동(main페이지로)
          //history.replace("/"); navigate로
        } catch (error) {
    
            //실패하면 throw new Error("") 값 출력
          window.alert(error);
        }
      };
    }
  return (
    
    <div className="App">   
      <header>
        <div className="title">Image-Editor</div>
      </header>
      
      <div class="box">
        <input type="id" placeholder="ID" />
        <input type="password" placeholder="Password" />
        <button type = "submit" className="btn-hover-color">로그인</button> //로그인 시 데이터 서버로
        <button className="btn-hover-color">회원 가입</button> //회원가입 화면, register로

      </div>

  
    </div>
  );
//main에도 props로 회원 정보 전달해야 함
  function Register(props){//회원가입 화면, 회원 정보 수정도 겸함
    //로그인 정보 전달 받으면 회원 정보 수정 아니면 회원가입 
    if(props===null){//회원가입
    return(
    <div>
      
    </div>
  )}
   else{//회원정보수정
  return(
    <div></div>
  )
 };
}; 

};

export default App;