import React from "react";
import axios from "axios";
import { useStorage } from "../../../StorageContext";
import { useEffect, useState } from "react";
import AccouchementDetail from "./AccouchementDetail";
import AccouchementNew from "./AccouchementNew";

const Accouchement = ({ idPatient }) => {
  const token = localStorage.getItem("token");
  const accouchementListUrl =
    "http://localhost:5000/api/accouchement/all/" + idPatient;
  const [accouchementList, setAccouchementList] = useState([]);

  const [idAccouchementSelected, setIdAccouchementSelected]=useState();

  const {setDisplayAccouchement,displayAccouchement,
    displayAccouchementDetail,setDisplayAccouchementDetail,
    displayAccouchementNew,setDisplayAccouchementNew}=useStorage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(accouchementListUrl,{
          headers: {
            Authorization: 'Bearer ' + token 
          }
        });
        setAccouchementList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const resetDisplay = () => {
    setDisplayAccouchement(false);
    setDisplayAccouchementDetail(false);
    setDisplayAccouchementNew(false);}

  return (
    <div>
      {displayAccouchement && <div>
      <h3 className="col-4 mx-auto pt-5">Accouchement List :</h3>
      <br />
      <br />
      <br />
      <div className="col-4 mx-auto">
        <div className="list-group">
          {accouchementList  &&
            accouchementList.map((acc, index) => (
              <a
                key={index}
                className="list-group-item list-group-item-action"
                onClick={()=>{
                  setIdAccouchementSelected(acc.idAccouchement);
                  resetDisplay();
                  setDisplayAccouchementDetail(true);}
                }
              >
                {acc.dateAccouchement}
              </a >
            ))}
        </div>
        <br />
        <br />
        <div>
          <div className="btn btn-primary" 
            onClick ={()=>{
              resetDisplay();
              setDisplayAccouchementNew(true);}
            }>Creer accouchement</div>
        </div>
      </div>
      </div>}
      {(displayAccouchementDetail && idAccouchementSelected) && <AccouchementDetail idAccouchementSelected={idAccouchementSelected} />}
      {displayAccouchementNew && <AccouchementNew />}
    </div>
  );
};

export default Accouchement;