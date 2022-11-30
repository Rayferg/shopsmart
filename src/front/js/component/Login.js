import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import React, { useContext, useState, Component} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserAccNavbar from "./UserAccNavbar";


const Login = () => {
  const { store, actions } = useContext(Context);
  // login--------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Register ----------------------------
  const [Remail, setRemail] = useState('');
  const [Rpassword, setRpassword] = useState('');
  const [Uname, setUname] = useState('');

  const history = useNavigate();
  const [newUser, setNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = sessionStorage.getItem("token");
        console.log(token);
        
  const handleRegisterClick = (e) => {
    e.preventDefault();
    // console.log(e.target)
    actions.createUser(Uname, Remail, Rpassword)
    
  }
  const handleLoginClick = (e) => {
    e.preventDefault();
    // console.log(e.target)
    actions.login(email, password)
    setIsLoggedIn(true)
  }
  const redirect = (e) => {
    e.preventDefault();
    setNewUser(true)
    console.log(newUser);
  }
  const handleLogoutClick = () => {
    actions.logout()
    setNewUser(false)
    setIsLoggedIn(false)
  } 
    
  React.useEffect(() => {
    if (token != "" && token != undefined) setIsLoggedIn(true)
  },[])

  let fields = newUser == false ?
    <div className="login-form">
      <form>
        <h1>Login</h1>
        <div className="content">
            <div className="input-field">
                <input type={"text"} placeholder={'Email'} value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
                <input type={'password'} placeholder={'password'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <a href="#" className="link">Forgot Your Password?</a>
            <br/>
        </div>
        <div className="action">              
            <button className="regBtn" onClick={(e)=> redirect(e)}>Register</button>
            <button onClick={(e) => handleLoginClick(e)}>Sign in</button>
        </div>
      </form>
        
        {store.message && <p>{store.message}</p>}
    </div>
    :
    <div className="register-form">
      <form>
          <h1>Register</h1>

          <div className="content">
              <div className="input-field">
                  <input type={"text"} placeholder={'Name'} value={Uname} onChange={(e)=> setUname(e.target.value)}/>
              </div>
              <div className="input-field">
                  <input type={"text"} placeholder={'Email'} value={Remail} onChange={(e)=> setRemail(e.target.value)}/>
              </div>
              <div className="input-field">
                  <input type={'password'} placeholder={'password'} value={Rpassword} onChange={(e)=> setRpassword(e.target.value)}/>
              </div>
              <a href="#" className="link">Forgot Your Password?</a>
              <br/>
          
              <a href="#" className="link" onClick={() => setNewUser(false)}>Go Back</a>
              
          </div>

          <div className="action">
            <button onClick={(e) => handleRegisterClick(e)}>Register</button>
          </div>

      </form>
    
    </div>

  let userAcc = 
    <div className="userAccCont">
      <UserAccNavbar />
      <button onClick={() => handleLogoutClick()} className="btn btn-primary">
        Log Out
      </button>
    </div>

  return (
    <div>
      {isLoggedIn == false ? fields : userAcc}
      
    </div>
  );
}

export default Login;