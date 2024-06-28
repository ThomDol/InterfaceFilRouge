import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../header/Header';

function ListPraticien() {
    const token = localStorage.getItem("token");
   // const navigate = useNavigate();

    const [praticien, setPraticien] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/praticien/all', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then(res => setPraticien(res.data))
        .catch(error => console.log(error));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer ce praticien ?");

        if (confirm) {
            axios.delete(`http://localhost:5000/api/praticien/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(res => {
                location.reload();
                setPraticien(praticien.filter(praticien => praticien.idPraticien !== id));
            })
            .catch(error => console.log(error));
            
        }
    }

    return (
        <div>
            <Header />
            <div className='container mt-5 text-center'>
                <h1>Liste des Praticiens</h1>
                <div>
                    <Link to="/create" className='btn btn-success d-flex-auto justify-content-left'>Add </Link>
                </div>
                <br />
                <table className='table table-bordered table table-striped'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {praticien.map((d,i) => (
                            <tr key={d.idPraticien}>
                                <td>{d.nomPraticienConnecte}</td>
                                <td>{d.prenomPraticienConnecte}</td>
                                <td>{d.email}</td>
                                <td>{d.tel}</td>
                                <td>
                                    <Link to={`/read/${d.idPraticien}`} className='btn btn-primary me-2'>Information</Link>
                                    <Link to={`/update/${d.idPraticien}`} className='btn btn-success me-2'> Modifier</Link>

                                    <button onClick={() => handleDelete(d.idPraticien)} className='btn btn-danger me-2'>Supprimer</button>
                                    
                                    <button onClick={() => handleblock(d.idPraticien)} className='btn btn-warning me-2'>Bloquer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListPraticien;
