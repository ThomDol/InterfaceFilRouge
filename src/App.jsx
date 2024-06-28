import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPatient from "./components/modulePatient/ListPatient";
import Accueil from "./components/Accueil/Accueil";
import Deconnexion from "./components/module deconnexion/Deconnexion";
import Patient from "./components/modulePatient/Patient";
import Error from "./components/module erreur/Error";
import Login from "./components/Login/Login";
import { StorageProvider } from "./components/StorageContext";
import ListPraticien from "./components/ModulePraticien/ListPraticien";
import CreatePraticien from "./components/ModulePraticien/CreatePraticien";
import UpdatePraticien from "./components/ModulePraticien/UpdatePraticien";
import React from "react";
import ReadPraticien from "./components/ModulePraticien/ReadPraticien";

function App() {
  return (
    <StorageProvider>
      <div className="container p-2">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/List" element={<ListPatient />} />
            <Route path="/patient/:id" element={<Patient />} />
            <Route path="/Deconnexion" element={<Deconnexion />} />
            <Route path="/Admin" element={<ListPraticien />} />
            <Route path="/create" element={<CreatePraticien />} />
            <Route path="/read/:id" element={<ReadPraticien/>}></Route>
            <Route
              path="/update/:id"
              element={<UpdatePraticien />}
            />
            <Route
              path="/error"
              element={<Error />}
            />
            <Route path="/*" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </StorageProvider>
  );
}

export default App;
