import React, {useState} from 'react';
import './recoverPassword.css';
import NabBar from '../../components/navbar';

import firebase from '../../config/firebase'; //configuracoes ligacao com firebase
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; //recurcos de autenticacao firebase

function RecoverPassword(){

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function TryRecoverPassword(){
        const auth = getAuth();
        sendPasswordResetEmail(auth, email).then(() => {
            setMsg('Enviamos um link para o seu email para redefinir a sua palavra-passe.')
        }).catch((error) => {
            setMsg('Email não encontrado! Por favor verifique se o email está correto.');
        });
    }

    return(
        <>
            <NabBar/>
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 font-weight-bold">Recupera a tua palavra-Passe</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Escreva o seu email.."></input>
                    <div className="msg my-4 text-center">
                        <span>{msg}</span>
                    </div>
                    <button onClick={TryRecoverPassword} type="button" className="w-100 btn btn-lg btn-block btn-recover">ok</button>
                </form>
        </>
    )
}

export default RecoverPassword;