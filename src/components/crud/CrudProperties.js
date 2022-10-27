import React, { useState } from 'react'
import {getAuth, signOut } from 'firebase/auth';
import FirebaseApp  from '../credentials/Credentials';
import {getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoc} from 'firebase/firestore';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const auth = getAuth(FirebaseApp)

const db = getFirestore(FirebaseApp)

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
      try {
        await addDoc(collection(db, 'propertie' ),{

          ...property

        })
      } catch (error) {
        console.log(error)
        
      }
   
      
      /* console.log(property)   */
      setProperty({...valorInicial})
    
    }
    

  return (
    <>
    <p>Bienvenido, <strong>{emailUsuario}</strong>Haz inciado sesión</p>
    <h3 className='text-center mb-3'>Ingresar propiedad</h3>
    <Form onSubmit={saveData}>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Nombre</Form.Label>
      
      <Form.Control controlId="name" name='name' type="text" placeholder="name"  onChange={captureInputs} value={property.name}/>
      <Form.Text className="text-muted">
        nombre de la propiedad
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
      <Form.Control  name='description' type="text" placeholder="description"  onChange={captureInputs} value={property.description}/>
      <Form.Text className="text-muted">
        description de la propiedad
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="image">
    <Form.Label>Imagenes</Form.Label>
      <Form.Control name='image' type="text" placeholder="images" />
      <Form.Text className="text-muted">
        Imagenes
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="price">
    <Form.Label>Precio</Form.Label>
      <Form.Control name='price'  type="text" placeholder="price"  onChange={captureInputs} value={property.price}/>
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