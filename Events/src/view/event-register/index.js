import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './eventRegister.css';
import {Link} from 'react-router-dom';
import NabBar from '../../components/navbar';
import firebase from '../../config/firebase'; 
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes } from "firebase/storage";


function EventRegister(){

    const [typeMsg, setTypeMsg] = useState();
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [image, setImage] = useState();
    const userEmail = useSelector(state => state.userEmail);

    const db= firebase.db;
    
    const storage= firebase.storage;
    const storageRef = firebase.storageRef;

    function TryEventRegister(){
        setTypeMsg(null);
        uploadBytes(storageRef(image.name),image).then(() => {
            addDoc(collection(db, "eventos"), {
                title: title,
                type: type,
                description: description,
                date: date,
                hour: hour,
                image: image.name,
                userEmail: userEmail,
                views: 0,
                public: 1,
                registrationDate: new Date()
            }).then(() => {
                setTypeMsg('sucess');
            }).catch(error => {
                setTypeMsg('error');
            });
        });
    }

    return(
        <>
        <NabBar/>
        <div className="col-12">
            <div className="row mt-5">
                <h3 className="text-center mx-auto">Novo Evento</h3>
            </div>

            <form>
                <div className="form-group m-3">
                    <label>Título:</label>
                    <input onChange={(e) => setTitle(e.target.value) } type="text" className="form-control"></input>    
                </div>
                <div className="form-group m-3">
                    <label>Tipo do Evento:</label>
                    <select onChange={(e) => setType(e.target.value) } type="text" className="form-control">
                        <option disabled selected>-- Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Concerto</option>
                        <option>Evento</option>    
                    </select>    
                </div>
                <div className="form-group m-3">
                    <label>Descrição do Evento:</label>
                    <textarea onChange={(e) => setDescription(e.target.value) } className="form-control" rows="3"></textarea>    
                </div>
                <div className="form-group row m-1">
                    <div className="col-6">
                        <label>Data:</label>
                        <input onChange={(e) => setDate(e.target.value) } type="date" className="form-control"></input>    
                    </div>
                    <div className="col-6">
                        <label>Hora:</label>
                        <input onChange={(e) => setHour(e.target.value) } type="time" className="form-control"></input>    
                    </div>
                </div>
                <div className="form-group m-3">
                    <label>Carregue a imagem:</label>
                    <input onChange={(e) => setImage(e.target.files[0]) } type="file" className="form-control"></input>    
                </div>
                <div className="form-group m-3">
                <button onClick={TryEventRegister} type="button" className=" w-100 btn btn-lg btn-block btn-recover">Publicar Evento</button>
                </div>
            </form>

            <div className="msg-login text-center mt-4">
                {typeMsg === 'sucess' && <span>Evento publicado! &#9989;</span>} 
                {typeMsg === 'error' && <span>Não foi possível publicar o evento! &#10060;</span>}                  
            </div>


        </div>
        </>
    )
}

export default EventRegister;