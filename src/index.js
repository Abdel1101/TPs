import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const ecole="ESTEM"
const filiere = "SDDI3"
const matiere= "ReactJs"
const vh = 48
const date=new Date();


const prof={
  nom: "Chougdali",
  prenom: "salami",
  age:41,
  dateNaissance: new Date ("1979-12-7")
}

const items = [
  { nom: "Karim", prenom:"Ahmed", dateNaissance: "2002-10-10"},
  { nom: "Karim", prenom:"Ahmed", dateNaissance: "2002-10-10"},
  { nom: "Karim", prenom:"Ahmed", dateNaissance: "2002-10-10"},
  { nom: "salam", prenom:"salami", dateNaissance: "2002-10-10"},
  { nom: "Karim", prenom:"Ahmed", dateNaissance: "2002-10-10"},
]

const montant=100;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    items = {items}
    montant={montant}
    prof={prof}
    ecole={ecole}
    filiere={filiere}
    matiere={matiere}
    vh={vh}
    date={date}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
