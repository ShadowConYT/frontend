import React, {useState} from "react";
import "./App.css";
import Axios from "axios";

function App(){
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].email);
        window.location.replace("https://final-year-project-chi.vercel.app/");
      }
    });
  }

  /*function redirectToWebsite() {
    window.location.replace("https://final-year-project-chi.vercel.app/");
  }*/

  return(
    <div className="container">
      <div className="loginForm">
        <form>
          <h4>LOGIN HERE</h4>
          <label htmlFor="username">USERNAME *</label>
          <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required />
          <label htmlFor="password">PASSWORD *</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className="button" type="submit" onClick={login}value="Login"/>
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
        </form>
      </div>
      <div className="loginForm">
        <form>
          <br></br>
          <h4>REGISTER</h4>
          <label htmlFor="email">EMAIL *</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="collegesucks123@urmail.com" required />
          <label htmlFor="username">USERNAME*</label>
          <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="eg : joint jagadeesan" required />
          <label htmlFor="password">PASSWORD *</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className="button" type="submit" onClick={register} value="Create an account" />
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
        </form>
        <div className="owner">
          <h2>MADE BY</h2>
          <h2>DHIVA</h2>
        </div>
      </div>
    </div>
  );
}

export default App;