import React, {useEffect, useState} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import NabBar from '../../components/navbar';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import EventCard from '../../components/event-card';
import { collection, getDocs } from "firebase/firestore";

function Home(){

    const db = firebase.db;
    const col = collection;
    const {events, setEvents} = useState([]);
    let eventList = [];

    useEffect(() => {    

        db.col("eventos").get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                eventList.push({
                    id: doc.id,                    
                    ...doc.data()
                })
                setEvents(eventList);

            })
        })
    });

    return(
        <>
        <NabBar/>
        <h1>{useSelector(state => state.userEmail)}</h1>
        <h1>{useSelector(state => state.userLogged)}</h1>                  
        
        <div className="row"> 
            {eventList.map((card) => <EventCard key={card.id} image={card.image} title={card.title} description={card.description} views={card.views} />)}
        </div>
        </>
    )  
}

export default Home;