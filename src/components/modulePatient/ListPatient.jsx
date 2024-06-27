import React from "react";
import { jwtDecode } from "jwt-decode";
import CryptoJS from "crypto-js";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PatientForm from "./sousmodulePatient/PatientForm";
import NavBar from "../header/NavBar";

const SECRET_KEY = "q#4puta9!am4$fcl";
const INIT_VECTOR = "1zp6@y#ect4?5krx";

const decryptToken = (encryptedToken) => {
  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
  const iv = CryptoJS.enc.Utf8.parse(INIT_VECTOR);

  const decrypted = CryptoJS.AES.decrypt(encryptedToken, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
};

const ListPatient = () => {
  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem("token");
  const urlList = `http://localhost:5000/api/patient/all/${userId}`;
  const urlDelete = `http://localhost:5000/api/patient`;
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [count, setCount] = useState(0); //pour reinitialiser liste de patient qd fenetre modal de creation se ferme

  useEffect(() => {
    try {
      const decryptedToken = decryptToken(token);
      const decodedToken = jwtDecode(decryptedToken);
      setUserId(decodedToken.id);
    } catch (error) {
      console.error("Erreur de décryptage ou de décodage du token:", error);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(urlList, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setList(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [count, userId]);

  const selectPatient = (elem) => {
    navigate("/patient/" + elem.idPatient);
  };

  useEffect(() => {
    setFilteredList(
      list.filter(
        (elem) =>
          elem.prenomPatient.toLowerCase().includes(searchItem.toLowerCase()) ||
          elem.nomPatient.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem, list]);

  const deletePatient = (id) => {
    if (userId) {
      //Message de confirmation de suppression
      Swal.fire({
        title: "Etes vous sûr de vouloir supprimer ce patient ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Oui",
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          const deleteData = async () => {
            try {
              const response = await axios.delete(urlDelete + "/" + id, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              setCount(count + 1);
            } catch (error) {
              console.error(error);
            }
          };
          deleteData();
          Swal.fire("Supprimé", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Suppression annulée", "", "info");
        }
      });
    }
  };

  return (
    <div className="container ">
      <div className="col-11 mx-auto">
        <NavBar />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" col-3 mx-auto">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            &#128269;
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Recherche Patient"
            aria-label="Recherche Patient"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <div className="col-8 mx-auto">
        <table className="table  table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Date Naissance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredList &&
              filteredList.map((patient, index) => (
                <tr key={index}>
                  <td onClick={() => selectPatient(patient)}>
                    {patient.nomPatient}
                  </td>
                  <td>{patient.prenomPatient}</td>
                  <td>{patient.dateNaissance}</td>
                  <td>
                    <span
                      onClick={() => {
                        deletePatient(patient.idPatient);
                      }}
                    >
                      &#10060;
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="col-2 mx-auto">
        <button
          data-bs-toggle="modal"
          data-bs-target={`#Modal-${userId}`}
          className="btn btn-primary "
        >
          Creer un nouveau patient
        </button>
        <PatientForm idModal={userId} setCount={setCount} count={count} />
      </div>
    </div>
  );
};

export default ListPatient;
