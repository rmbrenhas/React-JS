import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';

import firebase from '../../config/firebase'; //configuracoes ligacao com firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; //recurcos de autenticacao firebase

import { useSelector, useDispatch} from 'react-redux'; //userSelector = selecionar o que esta no store, useDispatch = enviar solicitacoes

                                                        

function Login(){
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [typeMsg, setTypeMsg] = useState();

    const dispatch = useDispatch();

    function TryLogin(){        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
            const user = userCredential.user;
            setTypeMsg('sucess');
            setTimeout (() => {
                dispatch({type: 'LOG_IN',userEmail: email});
            },2000);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setTypeMsg('error');
        });
    }

    return(
        <div className="login-content d-flex align-items-center">

            {useSelector(state => state.userLogged) > 0 ? <Redirect to ='' /> : null}

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">         
                    <i class="far fa-calendar-minus text-white fa-5x"></i>
                    {/*<h1 className="h3 mb-3 text-white font-weight-bold">Login</h1>*/}
                </div>
                <input onChange={(e) => setEmail(e.target.value) } type="email" className="form-control my-2" id="floatingInput" placeholder="Nome" />
                <input onChange={(e) => setPassword(e.target.value) } type="password" className="form-control my-2" id="floatingPassword" placeholder="Palavra-Passe" />

                <button onClick={TryLogin} className="w-100 btn btn-lg btn-login" type="button">Iniciar Sessão</button>
                <div className="msg-login text-white text-center my-5">
                    {typeMsg === 'sucess' && <span><strong>WoW!</strong> Você está conectado! &#128526;</span>} 
                    {typeMsg === 'error' && <span><strong>Upps..</strong> Verifique se os dados estão corretos! &#128533;</span>}                  
                </div>
                
                <div className="options-login mt-5 text-center">
                    <Link to="recoverpassword" className="mx-2"> Recuperar Palavra-Passe </Link>
                    <span>&#9874;</span>
                    <Link to="register" className="mx-2"> Regista-te aqui! </Link>
                </div>                
            </form>        
        </div>    
    )
}

export default Login; //Quando invocar o arquivo, devolva a funcao login