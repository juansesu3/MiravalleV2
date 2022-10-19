

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import AppRouter from './app-router/App-router';
import Login from './components/login/Login';
import FirebaseApp from './components/credentials/Credentials';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(FirebaseApp)
function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })
  return (
    <div >
      {usuario?<AppRouter emailUsuario ={usuario.email}/>:<Login/> }
      
    </div>
  );
}

export default App;
