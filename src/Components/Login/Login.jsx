import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react';
import "./Login.css";

const Login = () => {
    const [userName, setUsername] = useState("");
    const [passWord, setPassWord] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("teste", userName, passWord);

        console.log("Envio");
    };


  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
                <input type='email' placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}></input>
                <FaUser className='icon'/>
            </div>
            <div className='input-field'>
                <input type="password" placeholder='Senha' onChange={(e) => setPassWord(e.target.value)}/>
                <FaLock className='icon'/>
            </div>
    
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembrar de mim
                </label>
                <a href='#'>Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href='#'>Registrar</a></p>
                </div>
        </form>
    </div>
  )
}

export default Login
