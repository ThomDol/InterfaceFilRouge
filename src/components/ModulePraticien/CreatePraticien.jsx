import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

function CreatePraticien() {
    const token = localStorage.getItem("token");

    const [values, setValues] = useState({
        nomPraticienConnecte: '',
        prenomPraticienConnecte: '',
        password: '',
        nomRole: '',
        nomVille: '',
        codePostal: '',
        numAdeli: '',
        numSiret: '',
        email: '',
        tel: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/praticien", values, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then(res => {
            console.log(res);
            navigate('/Admin');
        })
        .catch(error => console.log(error));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'> 
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Ajouter un Praticien</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='nom'>Nom</label>
                        <input 
                            type="text" 
                            name='nom' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, nomPraticienConnecte: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='prenom'>Prénom</label>
                        <input 
                            type="text" 
                            name='prenom' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, prenomPraticienConnecte: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Mot de passe</label>
                        <input 
                            type="password" 
                            name='password' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, password: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='role'>Rôle</label>
                        <input 
                            type="text" 
                            name='role' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, nomRole: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='ville'>Ville</label>
                        <input 
                            type="text" 
                            name='ville' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, nomVille: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='codePostal'>Code postal</label>
                        <input 
                            type="text" 
                            name='codePostal' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, codePostal: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='numAdeli'>Numéro Adeli</label>
                        <input 
                            type="text" 
                            name='numAdeli' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, numAdeli: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='numSiret'>Numéro Siret</label>
                        <input 
                            type="text" 
                            name='numSiret' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, numSiret: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, email: e.target.value })} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='tel'>Téléphone</label>
                        <input 
                            type="text" 
                            name='tel' 
                            className='form-control' 
                            onChange={e => setValues({ ...values, tel: e.target.value })} 
                        />
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className='btn btn-success'>Submit</button>
                        <Link to="/" className='btn btn-primary ms-3'>Retour</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePraticien;
