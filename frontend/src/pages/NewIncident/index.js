import React from 'react';
import { Link, } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi" //importar os icons do feather icons
import './style.css';

import logoImg from '../../assets/logo.svg';


export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home.
                    </Link>
                </section>

                <form>
                    <input
                        placeholder="Titulo do caso"
                    // value={title}
                    //onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                    //value={description}
                    //onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em euros"
                    //value={value}
                    //onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

