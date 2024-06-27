import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../../StorageContext";

const AntecedentBebe = ({ idAntecedentBebe, idPatient }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [dateCreation, setDateCreation] = useState("");
  const [dateUpdate, setDateUpdate] = useState("");
  const [maternite, setMaternite] = useState("");
  const [perimetreCranien, setPerimetreCranien] = useState("");
  const [apgar, setApgar] = useState("");
  const [depassementDeTerme, setDepassementDeTerme] = useState(null);
  const [prematurite, setPrematurite] = useState(null);
  const [deformationDuCrane, setDeformationDuCrane] = useState(null);
  const [bosseSeroSanguine, setBosseSeroSanguine] = useState(null);
  const [cephalhematome, setCephalhematome] = useState(null);
  const [paralysieObstetricaleDuPlexusBrachial, setParalysieObstetricaleDuPlexusBrachial] = useState(null);
  const [paralysieFaciale, setParalysieFaciale] = useState(null);
  const [fractureClavicule, setFractureClavicule] = useState(null);
  const [dysplasieHanche, setDysplasieHanche] = useState(null);
  const [plagiocephalie, setPlagiocephalie] = useState(null);
  const [torticolis, setTorticolis] = useState(null);
  const [refluxGastroOesophagien, setRefluxGastroOesophagien] = useState(null);
  const [coliques, setColiques] = useState(null);
  const [allaitementMaternelle, setAllaitementMaternelle] = useState(null);
  const [efficaciteSuccion, setEfficaciteSuccion] = useState(null);
  const [sucagePouce, setSucagePouce] = useState(null);
  const [tetine, setTetine] = useState(null);
  const [typeRespiration, setTypeRespiration] = useState("");
  const [presenceBruitsArticulaires, setPresenceBruitsArticulaires] = useState(null);
  const [tics, setTics] = useState(null);
  const urlGetAnt = `http://localhost:5000/api/antecedentbebe/${idPatient}`;
  const [displayUpdateSuccessMessage, setDisplayUpdateSuccessMessage] = useState(false);
  const{setDisplayAntecedentBebe} = useStorage();

  const assign = (elem) => {
    if (elem !== null) {
      setDateCreation(elem.dateCreation || "");
      setDateUpdate(elem.dateUpdate || "");
      setMaternite(elem.maternite || "");
      setPerimetreCranien(elem.perimetreCranien || "");
      setApgar(elem.apgar || "");
      setDepassementDeTerme(elem.depassementDeTerme !== null ? elem.depassementDeTerme : null);
      setPrematurite(elem.prematurite !== null ? elem.prematurite : null);
      setDeformationDuCrane(elem.deformationDuCrane !== null ? elem.deformationDuCrane : null);
      setBosseSeroSanguine(elem.bosseSeroSanguine !== null ? elem.bosseSeroSanguine : null);
      setCephalhematome(elem.cephalhematome !== null ? elem.cephalhematome : null);
      setParalysieObstetricaleDuPlexusBrachial(elem.paralysieObstetricaleDuPlexusBrachial !== null ? elem.paralysieObstetricaleDuPlexusBrachial : null);
      setParalysieFaciale(elem.paralysieFaciale !== null ? elem.paralysieFaciale : null);
      setFractureClavicule(elem.fractureClavicule !== null ? elem.fractureClavicule : null);
      setDysplasieHanche(elem.dysplasieHanche !== null ? elem.dysplasieHanche : null);
      setPlagiocephalie(elem.plagiocephalie !== null ? elem.plagiocephalie : null);
      setTorticolis(elem.torticolis !== null ? elem.torticolis : null);
      setRefluxGastroOesophagien(elem.refluxGastroOesophagien !== null ? elem.refluxGastroOesophagien : null);
      setColiques(elem.coliques !== null ? elem.coliques : null);
      setAllaitementMaternelle(elem.allaitementMaternelle !== null ? elem.allaitementMaternelle : null);
      setEfficaciteSuccion(elem.efficaciteSuccion || null);
      setSucagePouce(elem.sucagePouce !== null ? elem.sucagePouce : null);
      setTetine(elem.tetine !== null ? elem.tetine : null);
      setTypeRespiration(elem.typeRespiration || "");
      setPresenceBruitsArticulaires(elem.presenceBruitsArticulaires !== null ? elem.presenceBruitsArticulaires : null);
      setTics(elem.tics !== null ? elem.tics : null);
    }
  };

  useEffect(() => {
    setDisplayUpdateSuccessMessage(false);
    const fetchData = async () => {
      try {
        const response = await axios.get(urlGetAnt, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        assign(response.data);
      } catch (error) {
        console.error(error);
        localStorage.clear();
        navigate('/login');
      }
    };

    fetchData();
  }, [urlGetAnt]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      dateCreation,
      dateUpdate,
      maternite,
      perimetreCranien,
      apgar,
      depassementDeTerme,
      prematurite,
      deformationDuCrane,
      bosseSeroSanguine,
      cephalhematome,
      paralysieObstetricaleDuPlexusBrachial,
      paralysieFaciale,
      fractureClavicule,
      dysplasieHanche,
      plagiocephalie,
      torticolis,
      refluxGastroOesophagien,
      coliques,
      allaitementMaternelle,
      efficaciteSuccion,
      sucagePouce,
      tetine,
      typeRespiration,
      presenceBruitsArticulaires,
      tics,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/antecedentbebe/${idAntecedentBebe}`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setDisplayUpdateSuccessMessage(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      localStorage.clear();
      navigate('/login');
    }
  };

  const deleteAntBebe =async(id)=>{
    try{
    const response = await axios.delete(
      `http://localhost:5000/api/antecedentbebe/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    alert("suppression ok !");
    setDisplayAntecedentBebe(false);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="col-9 mx-auto">
      <div className="row">
      <div className="col-11">
      <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
        <b>Antecedent Bébé</b>
      </h3>
      </div>
      <div className="col-1">
      <span onClick={() => {
                        deleteAntBebe(idAntecedentBebe);
                      }}> &#10060;</span>
      </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="dateCreation" className="form-label">
            Date de Création
          </label>
          <input
            type="text"
            className="form-control"
            id="dateCreation"
            required
            
            value={dateCreation}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateUpdate" className="form-label">
            Date de Mise à Jour
          </label>
          <input
            type="text"
            className="form-control"
            id="dateUpdate"
            placeholder="jj/mm/aaaa"
            pattern="\d{2}/\d{2}/\d{4}"
            required
            value={dateUpdate}
            onChange={(e) => setDateUpdate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="maternite" className="form-label">
            Maternité
          </label>
          <input
            type="text"
            className="form-control"
            id="maternite"
            value={maternite}
            onChange={(e) => setMaternite(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="perimetreCranien" className="form-label">
            Périmètre Crânien
          </label>
          <input
            type="number"
            className="form-control"
            id="perimetreCranien"
            value={perimetreCranien}
            onChange={(e) => setPerimetreCranien(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apgar" className="form-label">
            Apgar
          </label>
          <input
            type="number"
            className="form-control"
            id="apgar"
            value={apgar}
            onChange={(e) => setApgar(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dépassement de Terme</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="depassementDeTerme"
                id="depassementDeTermeOui"
                value="true"
                checked={depassementDeTerme === true}
                onChange={() => setDepassementDeTerme(true)}
              />
              <label className="form-check-label" htmlFor="depassementDeTermeOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="depassementDeTerme"
                id="depassementDeTermeNon"
                value="false"
                checked={depassementDeTerme === false}
                onChange={() => setDepassementDeTerme(false)}
              />
              <label className="form-check-label" htmlFor="depassementDeTermeNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Prématurité</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="prematurite"
                id="prematuriteOui"
                value="true"
                checked={prematurite === true}
                onChange={() => setPrematurite(true)}
              />
              <label className="form-check-label" htmlFor="prematuriteOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="prematurite"
                id="prematuriteNon"
                value="false"
                checked={prematurite === false}
                onChange={() => setPrematurite(false)}
              />
              <label className="form-check-label" htmlFor="prematuriteNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Déformation du Crâne</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="deformationDuCrane"
                id="deformationDuCraneOui"
                value="true"
                checked={deformationDuCrane === true}
                onChange={() => setDeformationDuCrane(true)}
              />
              <label className="form-check-label" htmlFor="deformationDuCraneOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="deformationDuCrane"
                id="deformationDuCraneNon"
                value="false"
                checked={deformationDuCrane === false}
                onChange={() => setDeformationDuCrane(false)}
              />
              <label className="form-check-label" htmlFor="deformationDuCraneNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Bosse Séro-Sanguine</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="bosseSeroSanguine"
                id="bosseSeroSanguineOui"
                value="true"
                checked={bosseSeroSanguine === true}
                onChange={() => setBosseSeroSanguine(true)}
              />
              <label className="form-check-label" htmlFor="bosseSeroSanguineOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="bosseSeroSanguine"
                id="bosseSeroSanguineNon"
                value="false"
                checked={bosseSeroSanguine === false}
                onChange={() => setBosseSeroSanguine(false)}
              />
              <label className="form-check-label" htmlFor="bosseSeroSanguineNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Cephalhematome</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="cephalhematome"
                id="cephalhematomeOui"
                value="true"
                checked={cephalhematome === true}
                onChange={() => setCephalhematome(true)}
              />
              <label className="form-check-label" htmlFor="cephalhematomeOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="cephalhematome"
                id="cephalhematomeNon"
                value="false"
                checked={cephalhematome === false}
                onChange={() => setCephalhematome(false)}
              />
              <label className="form-check-label" htmlFor="cephalhematomeNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Paralysie Obstétricale du Plexus Brachial</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paralysieObstetricaleDuPlexusBrachial"
                id="paralysieObstetricaleDuPlexusBrachialOui"
                value="true"
                checked={paralysieObstetricaleDuPlexusBrachial === true}
                onChange={() => setParalysieObstetricaleDuPlexusBrachial(true)}
              />
              <label className="form-check-label" htmlFor="paralysieObstetricaleDuPlexusBrachialOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paralysieObstetricaleDuPlexusBrachial"
                id="paralysieObstetricaleDuPlexusBrachialNon"
                value="false"
                checked={paralysieObstetricaleDuPlexusBrachial === false}
                onChange={() => setParalysieObstetricaleDuPlexusBrachial(false)}
              />
              <label className="form-check-label" htmlFor="paralysieObstetricaleDuPlexusBrachialNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Paralysie Faciale</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paralysieFaciale"
                id="paralysieFacialeOui"
                value="true"
                checked={paralysieFaciale === true}
                onChange={() => setParalysieFaciale(true)}
              />
              <label className="form-check-label" htmlFor="paralysieFacialeOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paralysieFaciale"
                id="paralysieFacialeNon"
                value="false"
                checked={paralysieFaciale === false}
                onChange={() => setParalysieFaciale(false)}
              />
              <label className="form-check-label" htmlFor="paralysieFacialeNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fracture Clavicule</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fractureClavicule"
                id="fractureClaviculeOui"
                value="true"
                checked={fractureClavicule === true}
                onChange={() => setFractureClavicule(true)}
              />
              <label className="form-check-label" htmlFor="fractureClaviculeOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fractureClavicule"
                id="fractureClaviculeNon"
                value="false"
                checked={fractureClavicule === false}
                onChange={() => setFractureClavicule(false)}
              />
              <label className="form-check-label" htmlFor="fractureClaviculeNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Dysplasie de la Hanche</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dysplasieHanche"
                id="dysplasieHancheOui"
                value="true"
                checked={dysplasieHanche === true}
                onChange={() => setDysplasieHanche(true)}
              />
              <label className="form-check-label" htmlFor="dysplasieHancheOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dysplasieHanche"
                id="dysplasieHancheNon"
                value="false"
                checked={dysplasieHanche === false}
                onChange={() => setDysplasieHanche(false)}
              />
              <label className="form-check-label" htmlFor="dysplasieHancheNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Plagiocéphalie</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="plagiocephalie"
                id="plagiocephalieOui"
                value="true"
                checked={plagiocephalie === true}
                onChange={() => setPlagiocephalie(true)}
              />
              <label className="form-check-label" htmlFor="plagiocephalieOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="plagiocephalie"
                id="plagiocephalieNon"
                value="false"
                checked={plagiocephalie === false}
                onChange={() => setPlagiocephalie(false)}
              />
              <label className="form-check-label" htmlFor="plagiocephalieNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Torticolis</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="torticolis"
                id="torticolisOui"
                value="true"
                checked={torticolis === true}
                onChange={() => setTorticolis(true)}
              />
              <label className="form-check-label" htmlFor="torticolisOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="torticolis"
                id="torticolisNon"
                value="false"
                checked={torticolis === false}
                onChange={() => setTorticolis(false)}
              />
              <label className="form-check-label" htmlFor="torticolisNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Reflux Gastro-Oesophagien</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="refluxGastroOesophagien"
                id="refluxGastroOesophagienOui"
                value="true"
                checked={refluxGastroOesophagien === true}
                onChange={() => setRefluxGastroOesophagien(true)}
              />
              <label className="form-check-label" htmlFor="refluxGastroOesophagienOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="refluxGastroOesophagien"
                id="refluxGastroOesophagienNon"
                value="false"
                checked={refluxGastroOesophagien === false}
                onChange={() => setRefluxGastroOesophagien(false)}
              />
              <label className="form-check-label" htmlFor="refluxGastroOesophagienNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Coliques</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="coliques"
                id="coliquesOui"
                value="true"
                checked={coliques === true}
                onChange={() => setColiques(true)}
              />
              <label className="form-check-label" htmlFor="coliquesOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="coliques"
                id="coliquesNon"
                value="false"
                checked={coliques === false}
                onChange={() => setColiques(false)}
              />
              <label className="form-check-label" htmlFor="coliquesNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Allaitement Maternelle</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="allaitementMaternelle"
                id="allaitementMaternelleOui"
                value="true"
                checked={allaitementMaternelle === true}
                onChange={() => setAllaitementMaternelle(true)}
              />
              <label className="form-check-label" htmlFor="allaitementMaternelleOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="allaitementMaternelle"
                id="allaitementMaternelleNon"
                value="false"
                checked={allaitementMaternelle === false}
                onChange={() => setAllaitementMaternelle(false)}
              />
              <label className="form-check-label" htmlFor="allaitementMaternelleNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Efficacité de Succion</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="efficaciteSuccion"
                id="efficaciteSuccionOui"
                value="true"
                checked={efficaciteSuccion === true}
                onChange={() => setEfficaciteSuccion(true)}
              />
              <label className="form-check-label" htmlFor="efficaciteSuccionOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="efficaciteSuccion"
                id="efficaciteSuccionNon"
                value="false"
                checked={efficaciteSuccion === false}
                onChange={() => setEfficaciteSuccion(false)}
              />
              <label className="form-check-label" htmlFor="efficaciteSuccionNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
    <label className="form-label">Sucage Pouce</label>
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="sucagePouce"
          id="sucagePouceOui"
          value="true"
          checked={sucagePouce === true}
          onChange={() => setSucagePouce(true)}
        />
        <label className="form-check-label" htmlFor="sucagePouceOui">
          Oui
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="sucagePouce"
          id="sucagePouceNon"
          value="false"
          checked={sucagePouce === false}
          onChange={() => setSucagePouce(false)}
        />
        <label className="form-check-label" htmlFor="sucagePouceNon">
          Non
        </label>
      </div>
    </div>
  </div>
  <div className="mb-3">
    <label className="form-label">Tétine</label>
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="tetine"
          id="tetineOui"
          value="true"
          checked={tetine === true}
          onChange={() => setTetine(true)}
        />
        <label className="form-check-label" htmlFor="tetineOui">
          Oui
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="tetine"
          id="tetineNon"
          value="false"
          checked={tetine === false}
          onChange={() => setTetine(false)}
        />
        <label className="form-check-label" htmlFor="tetineNon">
          Non
        </label>
      </div>
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="typeRespiration" className="form-label">Type de Respiration</label>
    <input
      type="text"
      className="form-control"
      id="typeRespiration"
      value={typeRespiration}
      onChange={(e) => setTypeRespiration(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Présence de Bruits Articulaires</label>
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="presenceBruitsArticulaires"
          id="presenceBruitsArticulairesOui"
          value="true"
          checked={presenceBruitsArticulaires === true}
          onChange={() => setPresenceBruitsArticulaires(true)}
        />
        <label className="form-check-label" htmlFor="presenceBruitsArticulairesOui">
          Oui
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="presenceBruitsArticulaires"
          id="presenceBruitsArticulairesNon"
          value="false"
          checked={presenceBruitsArticulaires === false}
          onChange={() => setPresenceBruitsArticulaires(false)}
        />
        <label className="form-check-label" htmlFor="presenceBruitsArticulairesNon">
          Non
        </label>
      </div>
    </div>
  </div>
  <div className="mb-3">
    <label className="form-label">Tics</label>
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="tics"
          id="ticsOui"
          value="true"
          checked={tics === true}
          onChange={() => setTics(true)}
        />
        <label className="form-check-label" htmlFor="ticsOui">
          Oui
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="tics"
          id="ticsNon"
          value="false"
          checked={tics === false}
          onChange={() => setTics(false)}
        />
        <label className="form-check-label" htmlFor="ticsNon">
          Non
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">
    Soumettre
  </button>
</form>
    </div>
  );
};

export default AntecedentBebe;
