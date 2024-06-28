import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdatePraticien() {
    const token = localStorage.getItem("token");
    const { id } = useParams();
    const [values, setValues] = useState({
        password: '',
        nomRole: '',
        nomVille: '',
        codePostal: '',
        numAdeli: '',
        numSiret: '',
        nomPraticienConnecte :'',
        prenomPraticienConnecte:'',
        email: '',
        tel: ''
    })

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/praticien/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then(res => {
            setValues(res.data);
        })
        .catch(error => console.log(error));
    }, []);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/praticien/${id}`, values, {
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
                <h1>Modifier le Praticien</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor='nom'>password</label>
                        <input
                            type="text"
                            name='password'
                            className='form-control'
                            value={values.password}
                            onChange={e => setValues({ ...values, password: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='role'>Role</label>
                        <input
                            type="text"
                            name='nomRole'
                            className='form-control'
                            value={values.nomRole}
                            onChange={e => setValues({ ...values, nomRole: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='Ville '>Ville </label>
                        <input
                            type="ville"
                            name='ville'
                            className='form-control'
                            value={values.nomVille}
                            onChange={e => setValues({ ...values, nomVille: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='code Postal'>code Postal</label>
                        <input
                            type="text"
                            name='code postal'
                            className='form-control'
                            value={values.codePostal}
                            onChange={e => setValues({ ...values, codePostal: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='numAdeli'>num Adeli</label>
                        <input
                            type="text"
                            name='numAdeli'
                            className='form-control'
                            value={values.numAdeli}
                            onChange={e => setValues({ ...values, numAdeli: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='num siret'>num Siret</label>
                        <input
                            type="text"
                            name='num siret'
                            className='form-control'
                            value={values.numSiret}
                            onChange={e => setValues({ ...values, numSiret: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='nom praticien'> Nom</label>
                        <input
                            type="text"
                            name='nom praticien'
                            className='form-control'
                            value={values.nomPraticienConnecte}
                            onChange={e => setValues({ ...values, nomPraticienConnecte: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='numSiret'> Prénom</label>
                        <input
                            type="text"
                            name='prenom'
                            className='form-control'
                            value={values.prenomPraticienConnecte}
                            onChange={e => setValues({ ...values, prenomPraticienConnecte: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='nom'>Email</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            value={values.email}
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='tel'>Tél</label>
                        <input
                            type="tel"
                            name='tel'
                            className='form-control'
                            value={values.tel}
                            onChange={e => setValues({ ...values, tel:e.target.value })}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default UpdatePraticien;
