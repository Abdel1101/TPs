import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Exemple from './Components/Exemple';
import styles from './Components/Exemple.module.css'
import { Profiler } from 'react';
function App(props) {
  
  function formatMontant(montant){
    return parseFloat(montant).toFixed(2);
  }

  function formatDate(date){
    const months = ["Jan","FEB", "MAR", "APR", "MAY", "JUN"]
    let parsed_date = new Date(Date.parse(date));
    let formatted_date = parsed_date.getDate() +
    "-" + months[parsed_date.getMonth()]+
    "-" + parsed_date.getFullYear()
    return formatted_date;
  }
  
  const divstyle = {
    backgroundColor: 'blue'
  }
  const textstyle = {
    fontSize: '35px',
    color: 'red'
  }
  var cTime = new Date().toTimeString();
  var class_name = "App";

  const lists = props.items.map((item) =>
  <tr>
      <td>{item.nom}</td>
      <td>{item.prenom}</td>
      <td>{item.dateNaissance}</td>
    </tr>
    )
  return (
   <div>
    <div className='Div'>
        <h3 className='App'>Bonjour mes étudiants LICDA !!</h3>
    </div>

    <div>
        <h3 className={styles.textstyle}>Bonjour mes étudiants LICDA !!</h3>
        <Exemple/>
    </div>


    <div style={ divstyle}>
        <h3 style={ textstyle}>Bonjour mes étudiants LICDA !!</h3>
    </div>

    <div>
      <Home/>
    </div>
    <hr></hr>
    <div className='Div'>
      <p className={class_name}> L'heure actuelle est: {cTime} </p>
    </div>
    <hr></hr>
   
    <div  className={styles.divstyle}>
        <div><b>Ecole: </b>{props.ecole}</div>
        <div><b>Filière: </b>{props.filiere}</div>
        <div><b>Matière: </b>{props.matiere}</div>
        <div><b>VH: </b>{props.vh}</div>
        <div><b>Date: </b>{props.date.toString()}</div>
    </div> 

    <hr></hr>
    <div  className={styles.divstyle}>
        <div><b>Nom: </b>{props.prof.nom}</div>
        <div><b>Prenom: </b>{props.prof.prenom}</div>
        <div><b>Age: </b>{props.prof.age}</div>
        <div><b>Date de naissance: </b>{props.prof.dateNaissance.toString()}</div>
    </div> 

    <hr></hr>

    <div>
      <br/><br/>
      <div className={styles.divstyle}>
      <div><b>Montant non formaté: </b><em>{props.montant}</em></div>
      <div><b>Montant formaté:</b><em>{formatMontant(props.montant)}</em></div>
      </div>
      <br/><br/>
      <div className={styles.divstyle}>
      <div><b>Montant non formaté: </b><em>{props.date.toString()}</em></div>
      <div><b>Montant formaté:</b><em>{formatDate(props.date).toString()}</em></div>
      </div>
    </div>

    <hr></hr>
    
    <tabel>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Date_Naissance</th>
        </tr>

        </thead>
          <tbody>
            {lists}
          </tbody>
    
      
    </tabel>

    <hr></hr>

   </div>
  );
}

export default App;
