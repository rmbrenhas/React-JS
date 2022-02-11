import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


function NavBar(){

    const dispatch = useDispatch();

    return(

        <nav className="navbar navbar-expand-lg">
            <i class="far fa-calendar-minus text-white fa-2x"></i>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <i class="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Início</Link></li>                    
                    
                    {
                        useSelector(state => state.userLogged) > 0 ? 
                        <> 
                            <li className="nav-item"><Link className="nav-link" to="/eventregister">Adicionar Evento</Link></li>                    
                            <li className="nav-item"><Link className="nav-link" to="">Meus Eventos</Link></li>                    
                            <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})} >Sair</Link></li>
                        </>
                        :
                        <>
                            <li className="nav-item"><Link className="nav-link" to="/register">Registar</Link></li>                    
                            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sessão</Link></li>
                        </> 
                    }     

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
