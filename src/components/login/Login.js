import React, {useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FirebaseApp  from '../credentials/Credentials';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(FirebaseApp) 

const Login = () => {
    const [registro, setRegistro] = useState(false);

    const handlerSubmit = async(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(registro){
            await createUserWithEmailAndPassword(auth, email, password)
        }else{
            await signInWithEmailAndPassword(auth, email, password)
        }
    };


  return (
    <>
    <h>{registro ? 'Registrate':'Inicia sesion'}</h>
    <Form onSubmit={handlerSubmit}>
       
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" id="email" required />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" id="password" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
    {registro ? 'Registrate':'Inicia sesion'}
    </Button>
    <Button variant="secondary" onClick={()=> setRegistro(!registro)} >
    {registro ? 'Ya tienes una cuenta? Inicia sesion':'No tienes cuneta? Registrate'}
    </Button>
  </Form>
  </>
  )
}

export default Login