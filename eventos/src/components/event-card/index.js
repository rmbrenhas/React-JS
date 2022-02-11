import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import './eventCard.css';

function EventCard({key, img, title, description, views}){
    return(
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/150x100" className="card-img-top img-card" alt="Imagem do Evento" />
            
            <div className="card-body">
                <h5>TITULO{title}</h5>
                <div className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{description}    
                </div>
                <div className="row footer-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to='/' className="btn btn-sm btn-details">+ detalhes</Link>
                    </div>
                    <div className="col-6 views">
                        <i class="fas fa-eye"><span>{views}200</span></i>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default EventCard;

