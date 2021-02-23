import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    function handleRegister(e) {
        e.preventDefault();
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be teh hero" />

                    <h1>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</h1>


                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                            Já tenho Cadastro
                    </Link>
                </section>

                <form onSubmit={(e) => { handleRegister(e) }}>

                    <input placeholder="Nome da ONG" />
                    <input type="emil" placeholder="E-mail" />
                    <input placeholder="whatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadrastrar</button>

                </form>
            </div>
        </div>
    )
}
