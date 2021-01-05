import React, { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom";
import logo from '../img/logo.png'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className="login__logo" src={logo} />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button
                    type='submit'
                    onClick={signIn}
                    className='login__signInButton'>Sign In</button>
                </form>

                <button 
                onClick={register}
                className='login__registerButton'>Create Account</button>
                
            </div>
        </div>
    )
}

export default Login
