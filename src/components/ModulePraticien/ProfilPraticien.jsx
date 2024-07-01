import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header';

function ProfilPratcien() {
    const token = localStorage.getItem("token");
    const [praticien, setPraticien] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPraticien = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/profile `, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setPraticien(response.data);
            } catch (error) {
                console.error(error);
                setError("Une erreur s'est produite lors de la récupération des données du praticien.");
            }
        };

        fetchPraticien();
    }, [token]);

    return (
        <div>
            <Header />
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h2>Profil Praticien</h2>
                    {error ? (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    ) : (
                        <>
                            <div className='mb-2'>
                                <strong>Nom: {praticien.nomPraticienConnecte}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Prénom: {praticien.prenomPraticienConnecte}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Ville: {praticien.nomVille}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Code Postal: {praticien.codePostal}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Numéro Adeli: {praticien.numAdeli}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Numéro Siret: {praticien.numSiret}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Email: {praticien.email}</strong>
                            </div>
                            <div className='mb-2'>
                                <strong>Téléphone: {praticien.tel}</strong>
                            </div>
                        </>
                    )}
                    <Link to={`/update/${praticien.id}`} className='btn btn-success'>Modifier</Link>
                    <Link to="/Admin" className='btn btn-primary ms-3'>Retour</Link>
                </div>
            </div>
        </div>
    );
}

export default ProfilPratcien;
