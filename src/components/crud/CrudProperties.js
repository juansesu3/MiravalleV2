import React, { useState } from 'react'
import {getAuth, signOut } from 'firebase/auth';
import FirebaseApp  from '../credentials/Credentials';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const auth = getAuth(FirebaseApp)

const CrudProperties = ({emailUsuario}) => {
    const valorInicial ={
        name:"",
        description:"",
        images:"",
        price:""
    
      }
    
    
    const [property, setProperty] = useState(valorInicial);
    
    const captureInputs = (e)=>{
      const {name, value} = e.target;
      setProperty({...property, [name]:value})
    }
    const saveData =async(e)=>{
      e.preventDefault();
      setProperty({...valorInicial})
    
    }
    

  return (
    <>
    <p>Bienvenido, <strong>{emailUsuario}</strong>Haz inciado sesión</p>
    <h3 className='text-center mb-3'>Ingresar propiedad</h3>
    <Form onSubmit={saveData}>
    <Form.Group className="mb-3" name='name'>
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="name"  onChnaged={captureInputs} value={property.name}/>
      <Form.Text className="text-muted">
        nombre de la propiedad
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" name='description'>
    <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="description"  onChnaged={captureInputs} value={property.description}/>
      <Form.Text className="text-muted">
        description de la propiedad
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" name='image'>
    <Form.Label>Imagenes</Form.Label>
      <Form.Control type="text" placeholder="images" />
      <Form.Text className="text-muted">
        Imagenes
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" name='price'>
    <Form.Label>Precio</Form.Label>
      <Form.Control type="text" placeholder="price"  onChnaged={captureInputs} value={property.price}/>
      <Form.Text className="text-muted">
        vAlor de la propiedad
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" name=''>
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <Button variant="primary" type="submit" onClick={()=>signOut(auth)}>
      Cerrar sesión
    </Button>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
        <h2 className='text-center mb-3'>Lista de propiedades</h2>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  </>
  )
}

export default CrudProperties