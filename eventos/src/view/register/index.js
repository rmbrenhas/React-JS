import React, {useState} from 'react';
import './register.css'
import NabBar from '../../components/navbar'
import firebase from '../../config/firebase'; //configuracoes ligacao com firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; //recurcos de autenticacao firebase

function Register(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [typeMsg, setTypeMsg] = useState();
    const [msg, setMsg] = useState();
    const [loading, setLoading] = useState();

    function TryRegister(){
        
        setLoading(1);

        setTypeMsg(null);        
        if(!email || !password){
            setLoading(0);
            setTypeMsg('error')
            setMsg('É necessário informar o email e palavra-passe para a criar a sua conta!')
            return;
            
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in         
        setLoading(0);
        setTypeMsg('sucess')
        }).catch((error) => {
            setLoading(0);
            setTypeMsg('error')
            const errorCode = error.code;
            const errorMessage = error.message;
            switch(error.message){
                case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                    setMsg('Palavra-passe deve conter pelo menos 6 caracteres.');
                    break;
                case 'Firebase: Error (auth/email-already-in-use).':
                    setMsg('Este email já está registado!');
                    break;
                case 'Firebase: Error (auth/invalid-email).':
                    setMsg('O formato do email é inválido!');
                    break;
                default:
                    setMsg('Não foi possível efetuar o registo. Tente novamente mais tarde. Obrigado!');
                    break;
            }                        
        });
      
    }    

    return(
        <> {/*Encapsular os dois elementos num só, return nao permite devolver mais que um elemento.*/}
            <NabBar/>

            <div className="form-register">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cria a tua conta</h1>

                    <input onChange={(e) => setEmail(e.target.value) } type="email" className="form-control my-2" placeholder="Email"></input>
                    <input onChange={(e) => setPassword(e.target.value) } type="password" className="form-control my-2" placeholder="Palavra-Passe"></input>
                
                    {
                        loading ? <div className="spinner-border text-danger" role="status"><span className="sr-only"></span></div>
                        : <button onClick={TryRegister} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-register">Registar</button>
                    }      

                    <div className="msg-login text-black text-center my-3">
                        {typeMsg === 'sucess' && <span><strong>WoW!</strong> Utilizador registado com sucesso! &#9989;</span>} 
                        {typeMsg === 'error' && <span><strong>Upps..</strong> {msg} &#9940;</span>}                  
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;