import React from 'react';
import Header from '../header/Header';



const ListeGrossesse = () => {
    token = localconstStorage.getItem("token");
    const[grossesse,setGrossesse] = ([]);

useEffect(() => {
    axios.get(`http://localhost:5000/api/grossesse/all/${idPatient}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
    .then(res => setGrossesse(res.data))
    .catch(error => console.log(error));
}, []);

  return (
    <div>
      <div className="container mt-5">
        <Header/>
        <br />
        <br />
        <h2>Formulaire Grossesse</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>ID Grossesse</td>
              <td><input type="number" className="form-control" id="idGrossesse" name="idGrossesse" /></td>
            </tr>
            <tr>
              <td>Date de Création</td>
              <td><input type="date" className="form-control" id="dateCreation" name="dateCreation" /></td>
            </tr>
            <tr>
              <td>Date de Mise à Jour</td>
              <td><input type="date" className="form-control" id="dateUpdate" name="dateUpdate" /></td>
            </tr>
            <tr>
              <td>Maternité</td>
              <td><input type="text" className="form-control" id="maternite" name="maternite" /></td>
            </tr>
            <tr>
              <td>Grossesse Multiple</td>
              <td>
                <label className="form-check-label" htmlFor="grossesseMultipleOui">Oui</label>
                <input className="form-check-input" type="radio" id="grossesseMultipleOui" name="grossesseMultiple" value="true" />
                <br />
                <label className="form-check-label" htmlFor="grossesseMultipleNon">Non</label>
                <input className="form-check-input" type="radio" id="grossesseMultipleNon" name="grossesseMultiple" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Douleurs Pendant Grossesse</td>
              <td><input type="text" className="form-control" id="douleursPendantGrossesse" name="douleursPendantGrossesse" /></td>
            </tr>
            <tr>
              <td>État Psycho-Émotionnel</td>
              <td><input type="text" className="form-control" id="etatPsychoEmotionnel" name="etatPsychoEmotionnel" /></td>
            </tr>
            <tr>
              <td>Traitement Lié à la Grossesse</td>
              <td><input type="text" className="form-control" id="traitementLieGrossesse" name="traitementLieGrossesse" /></td>
            </tr>
            <tr>
              <td>Mouvements du Bébé</td>
              <td><input type="text" className="form-control" id="mouvementsBebe" name="mouvementsBebe" /></td>
            </tr>
            <tr>
              <td>Césarienne Prévue</td>
              <td>
                <label className="form-check-label" htmlFor="cesariennePrevueOui">Oui</label>
                <input className="form-check-input" type="radio" id="cesariennePrevueOui" name="cesariennePrevue" value="true" />
                <br />
                <label className="form-check-label" htmlFor="cesariennePrevueNon">Non</label>
                <input className="form-check-input" type="radio" id="cesariennePrevueNon" name="cesariennePrevue" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Projet Péridurale</td>
              <td>
                <label className="form-check-label" htmlFor="projetPeriduraleOui">Oui</label>
                <input className="form-check-input" type="radio" id="projetPeriduraleOui" name="projetPeridurale" value="true" />
                <br />
                <label className="form-check-label" htmlFor="projetPeriduraleNon">Non</label>
                <input className="form-check-input" type="radio" id="projetPeriduraleNon" name="projetPeridurale" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Projet Allaitement</td>
              <td>
                <label className="form-check-label" htmlFor="projetAllaitementOui">Oui</label>
                <input className="form-check-input" type="radio" id="projetAllaitementOui" name="projetAllaitement" value="true" />
                <br />
                <label className="form-check-label" htmlFor="projetAllaitementNon">Non</label>
                <input className="form-check-input" type="radio" id="projetAllaitementNon" name="projetAllaitement" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Naussées</td>
              <td>
                <label className="form-check-label" htmlFor="nauseesOui">Oui</label>
                <input className="form-check-input" type="radio" id="nauseesOui" name="nausees" value="true" />
                <br />
                <label className="form-check-label" htmlFor="nauseesNon">Non</label>
                <input className="form-check-input" type="radio" id="nauseesNon" name="nausees" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Constipation</td>
              <td>
                <label className="form-check-label" htmlFor="constipationOui">Oui</label>
                <input className="form-check-input" type="radio" id="constipationOui" name="constipation" value="true" />
                <br />
                <label className="form-check-label" htmlFor="constipationNon">Non</label>
                <input className="form-check-input" type="radio" id="constipationNon" name="constipation" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Diarrhées</td>
              <td>
                <label className="form-check-label" htmlFor="diarrheesOui">Oui</label>
                <input className="form-check-input" type="radio" id="diarrheesOui" name="diarrhees" value="true" />
                <br />
                <label className="form-check-label" htmlFor="diarrheesNon">Non</label>
                <input className="form-check-input" type="radio" id="diarrheesNon" name="diarrhees" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Aigreurs d'Estomac</td>
              <td>
                <label className="form-check-label" htmlFor="aigreursEstomacOui">Oui</label>
                <input className="form-check-input" type="radio" id="aigreursEstomacOui" name="aigreursEstomac" value="true" />
                <br />
                <label className="form-check-label" htmlFor="aigreursEstomacNon">Non</label>
                <input className="form-check-input" type="radio" id="aigreursEstomacNon" name="aigreursEstomac" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Œdèmes des Membres Inférieurs</td>
              <td>
                <label className="form-check-label" htmlFor="oedemesMembresInferieursOui">Oui</label>
                <input className="form-check-input" type="radio" id="oedemesMembresInferieursOui" name="oedemesMembresInferieurs" value="true" />
                <br />
                <label className="form-check-label" htmlFor="oedemesMembresInferieursNon">Non</label>
                <input className="form-check-input" type="radio" id="oedemesMembresInferieursNon" name="oedemesMembresInferieurs" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Pesanteur Pelvienne</td>
              <td>
                <label className="form-check-label" htmlFor="pesanteurPelvienneOui">Oui</label>
                <input className="form-check-input" type="radio" id="pesanteurPelvienneOui" name="pesanteurPelvienne" value="true" />
                <br />
                <label className="form-check-label" htmlFor="pesanteurPelvienneNon">Non</label>
                <input className="form-check-input" type="radio" id="pesanteurPelvienneNon" name="pesanteurPelvienne" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Incontinence</td>
              <td>
                <label className="form-check-label" htmlFor="incontinenceOui">Oui</label>
                <input className="form-check-input" type="radio" id="incontinenceOui" name="incontinence" value="true" />
                <br />
                <label className="form-check-label" htmlFor="incontinenceNon">Non</label>
                <input className="form-check-input" type="radio" id="incontinenceNon" name="incontinence" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Tension Mammaire</td>
              <td>
                <label className="form-check-label" htmlFor="tensionMammaireOui">Oui</label>
                <input className="form-check-input" type="radio" id="tensionMammaireOui" name="tensionMammaire" value="true" />
                <br />
                <label className="form-check-label" htmlFor="tensionMammaireNon">Non</label>
                <input className="form-check-input" type="radio" id="tensionMammaireNon" name="tensionMammaire" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>Mastose</td>
              <td>
                <label className="form-check-label" htmlFor="mastoseOui">Oui</label>
                <input className="form-check-input" type="radio" id="mastoseOui" name="mastose" value="true" />
                <br />
                <label className="form-check-label" htmlFor="mastoseNon">Non</label>
                <input className="form-check-input" type="radio" id="mastoseNon" name="mastose" value="false" checked />
              </td>
            </tr>
            <tr>
              <td>ID Patient</td>
              <td><input type="number" className="form-control" id="idPatient" name="idPatient" /></td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListeGrossesse;
