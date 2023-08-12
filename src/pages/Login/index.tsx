import {  useContext, useState } from "react";
//import { Route, Routes, Link } from 'react-router-dom';
//import { RequireAuth } from '../../contexts/Auth/RequireAuth';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import '../../assets/css/style.css';
import '../../assets/js/app.js';
import img1 from '../../img/Business support.gif';
import image2 from'../../img/image2.png';
import image3 from '../../img/image3.png';
import logo from '../../img/logo.png';


export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Impedir o comportamento padrão do submit
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                             
                navigate('/private');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    return (
    <div>
    <main>
    <div className="box">
    <div className="inner-box">
        <div className="forms-wrap">
        <form className="sign-in-form" onSubmit={handleLogin}>
            <div className="logo">
            <img src={logo} alt="easyclass" />
            </div>

            <div className="heading">
            <h2>Login</h2>
            <h6>Passo em direção à sua conta.</h6>
            </div>

            <div className="actual-form">
            <div className="input-wrap">
                <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="input-field"
                autoComplete="off"
                required
                />
                <label></label>
            </div>

            <div className="input-wrap">
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                className="input-field"
                type="password"
                required
                />
                <label></label>
            </div>

       <input value="Sign In"  onClick={ handleLogin } className="sign-btn"/>  

            <p className="text">
            Em caso de dúvidas, favor entrar em contato com coord.ti@unimednet.com.br.
              
            </p>
            </div>
        </form >

        </div>

        <div className="carousel">
        <div className="images-wrapper">
            <img src={img1} className="image img-1 show" alt="" />
            <img src={image2} className="image img-2" alt="" />
            <img src={image3} className="image img-3" alt="" />
        </div>

        <div className="text-slider">
            <div className="text-wrap">
            <div className="text-group">
                <h2>Inteligência Empresarial</h2>
                <h2>..</h2>
                <h2>..</h2>
            </div>
            </div>

            <div className="bullets">
            <span className="active" data-value="1"></span>
            <span  data-value="2"></span>
            <span  data-value="3"></span>
            </div>
        </div>
        </div>
    </div>
    </div>
    </main>

    </div>

    
    );
}

