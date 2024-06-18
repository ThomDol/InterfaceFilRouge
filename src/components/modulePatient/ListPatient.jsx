import React from 'react';
import { useState,useEffect } from 'react';
import { useStorage } from '../StorageContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';



const ListPatient = () => {

const urlList= "http://localhost:5000/api/patient/all/1";
const [list,setList]=useState([]);
const navigate = useNavigate();
const [searchItem,setSearchItem]=useState('');
const [filteredList,setFilteredList]=useState([]);

const {setPatient}=useStorage();


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(urlList);
      setList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);



const selectPatient=(elem)=>{
  setPatient(elem);

  navigate('/patient');
}

useEffect(()=>{setFilteredList(list.filter(elem=>(elem.prenomPatient.toLowerCase().includes(searchItem.toLowerCase()) || elem.nomPatient.toLowerCase().includes(searchItem.toLowerCase()))));},[searchItem,list])





    return (
    
             <div className='container '>
              <div className='col-4 mx-auto'><Header/></div>
              
                <br /><br /><br />
                <div className=' col-3 mx-auto'>
                <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Recherche Patient" aria-label="Recherche Patient" value={searchItem} onChange={(e)=>{setSearchItem(e.target.value);}} />
</div>
</div>
<br />
<div className='col-8 mx-auto'>
          <table className="table table-striped-columns">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Date Naissance</th>
    </tr>
  </thead>
  <tbody>
 {filteredList && filteredList.map((patient,index)=>(
    <tr key={index}>
    <td onClick={()=>selectPatient(patient)}>{patient.nomPatient}</td>
    <td>{patient.prenomPatient}</td>
    <td>{patient.dateNaissance}</td>
  </tr>
 ))}
  </tbody>
</table>  
</div>
        </div>
    
    );

}

       

export default ListPatient;