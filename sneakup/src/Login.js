import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';
import './Login.css';

function Login() {
    
    const[email,setEmail] = useState('');
    
    const[password,setPassword] = useState('');
    
    const history = useHistory();
    
    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then( (auth) =>{
           history.push('/')    
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then( auth => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
                <Link to ='/'>
                    <img  className="login__logo" src="https://cdn.pixabay.com/photo/2017/09/20/11/47/sneakers-2768263__340.png" alt="fg"></img>
                </Link >
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button className="login__signInbtn" type="submit" onClick= {signIn} >Sign-In</button>
                </form>
                <p>By signing in you agree to Doodh's Terms&Conditions.Please read our cookies and Privacy notice.</p>
                <button className="login__registerbtn" onClick={register}>Create a new account</button>
            </div>
        </div>
    )
}

export default Login
