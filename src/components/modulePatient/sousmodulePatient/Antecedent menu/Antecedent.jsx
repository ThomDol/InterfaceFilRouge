import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Antecedent = ({ idAntecedent, idPatient }) => {
  const [dateCreation, setDateCreation] = useState("");
  const [dateUpdate, setDateUpdate] = useState("");
  const [grossesse, setGrossesse] = useState("");
  const [fumeur, setFumeur] = useState("");
  const [allergie, setAllergie] = useState("");
  const [traitement, setTraitement] = useState("");
  const [antTraumatique, setAntTraumatique] = useState("");
  const [antChirurgicaux, setAntChirurgicaux] = useState("");
  const [antFamilliaux, setAntFamilliaux] = useState("");
  const [antOrl, setAntOrl] = useState("");
  const [antVisceral, setAntVisceral] = useState("");
  const [antCardioPulmonaire, setAntCardioPulmonaire] = useState("");
  const [antUroGynecaux, setAntUroGynecaux] = useState("");
  const [antPsy, setAntPsy] = useState("");
  const [antNotesDiverses, setAntNotesDiverses] = useState("");
  const urlGetAnt = `http://localhost:5000/api/antecedent/${idPatient}`;

  const assign = (elem) => {
    if (elem !== null) {
      setDateCreation(elem.dateCreation || "");
      setDateUpdate(elem.dateUpdate || "");
      setGrossesse(elem.grossesse || "");
      setFumeur(elem.fumeur !== null ? elem.fumeur : "");
      setAllergie(elem.allergie || "");
      setTraitement(elem.traitement || "");
      setAntTraumatique(elem.antTraumatique || "");
      setAntChirurgicaux(elem.antChirurgicaux || "");
      setAntFamilliaux(elem.antFamilliaux || "");
      setAntOrl(elem.antOrl || "");
      setAntVisceral(elem.antVisceral || "");
      setAntCardioPulmonaire(elem.antCardioPulmonaire || "");
      setAntUroGynecaux(elem.antUroGynecaux || "");
      setAntPsy(elem.antPsy || "");
      setAntNotesDiverses(elem.antNotesDiverses || "");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlGetAnt);
        assign(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [urlGetAnt]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      dateCreation,
      dateUpdate,
      grossesse,
      fumeur,
      allergie,
      traitement,
      antTraumatique,
      antChirurgicaux,
      antFamilliaux,
      antOrl,
      antVisceral,
      antCardioPulmonaire,
      antUroGynecaux,
      antPsy,
      antNotesDiverses,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/antecedent/${idAntecedent}`,
        formData
      );
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <div className="col-9 mx-auto">
      <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
        <b>Antecedent</b>
      </h3>
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
            onChange={(e) => setDateCreation(e.target.value)}
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
            value={dateUpdate}
            required
            onChange={(e) => setDateUpdate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="grossesse" className="form-label">
            Grossesse
          </label>
          <input
            type="number"
            className="form-control"
            id="grossesse"
            value={grossesse}
            onChange={(e) => setGrossesse(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fumeur</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fumeur"
                id="fumeurOui"
                value="true"
                checked={fumeur === true}
                onChange={() => setFumeur(true)}
              />
              <label className="form-check-label" htmlFor="fumeurOui">
                Oui
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fumeur"
                id="fumeurNon"
                value="false"
                checked={fumeur === false}
                onChange={() => setFumeur(false)}
              />
              <label className="form-check-label" htmlFor="fumeurNon">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="allergie" className="form-label">
            Allergie
          </label>
          <textarea
            className="form-control"
            id="allergie"
            rows="3"
            value={allergie}
            onChange={(e) => setAllergie(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="traitement" className="form-label">
            Traitement
          </label>
          <textarea
            className="form-control"
            id="traitement"
            rows="3"
            value={traitement}
            onChange={(e) => setTraitement(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antTraumatique" className="form-label">
            Antécédents Traumatiques
          </label>
          <textarea
            className="form-control"
            id="antTraumatique"
            rows="3"
            value={antTraumatique}
            onChange={(e) => setAntTraumatique(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antChirurgicaux" className="form-label">
            Antécédents Chirurgicaux
          </label>
          <textarea
            className="form-control"
            id="antChirurgicaux"
            rows="3"
            value={antChirurgicaux}
            onChange={(e) => setAntChirurgicaux(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antFamilliaux" className="form-label">
            Antécédents Familiaux
          </label>
          <textarea
            className="form-control"
            id="antFamilliaux"
            rows="3"
            value={antFamilliaux}
            onChange={(e) => setAntFamilliaux(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antOrl" className="form-label">
            Antécédents ORL
          </label>
          <textarea
            className="form-control"
            id="antOrl"
            rows="3"
            value={antOrl}
            onChange={(e) => setAntOrl(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antVisceral" className="form-label">
            Antécédents Viscéraux
          </label>
          <textarea
            className="form-control"
            id="antVisceral"
            rows="3"
            value={antVisceral}
            onChange={(e) => setAntVisceral(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antCardioPulmonaire" className="form-label">
            Antécédents Cardio-Pulmonaires
          </label>
          <textarea
            className="form-control"
            id="antCardioPulmonaire"
            rows="3"
            value={antCardioPulmonaire}
            onChange={(e) => setAntCardioPulmonaire(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antUroGynecaux" className="form-label">
            Antécédents Uro-Gynécologiques
          </label>
          <textarea
            className="form-control"
            id="antUroGynecaux"
            rows="3"
            value={antUroGynecaux}
            onChange={(e) => setAntUroGynecaux(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antPsy" className="form-label">
            Antécédents Psychologiques
          </label>
          <textarea
            className="form-control"
            id="antPsy"
            rows="3"
            value={antPsy}
            onChange={(e) => setAntPsy(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="antNotesDiverses" className="form-label">
            Notes Diverses
          </label>
          <textarea
            className="form-control"
            id="antNotesDiverses"
            rows="3"
            value={antNotesDiverses}
            onChange={(e) => setAntNotesDiverses(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default Antecedent;
