import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faChartArea, faDollarSign, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { CardSc, Father, ImgSC, CarouselSC, ButtonSC } from './styles';


import { getAuth, signOut } from 'firebase/auth';
import FirebaseApp from '../credentials/Credentials';
import { Link } from 'react-router-dom';

import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoc } from 'firebase/firestore';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const auth = getAuth(FirebaseApp)
const db = getFirestore(FirebaseApp)




const Home = ({ emailUsuario }) => {
  /*state variables */
  const [list, setList] = useState([])



  /*renderezation function  */

  useEffect(() => {
    const getList = async() => {
      try {
        const querySnapshot = await getDocs(collection(db, 'propertie'))
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id:doc.id })
        })
        setList(docs)
      } catch (error) {
        console.log(error)

      }
    }
    getList()
  }, [list])

  const deletePropertie = async (id)=>{

    await deleteDoc(doc(db, 'propertie'))

  }

  return (
    <Father>
      <div>
        {
          list.map(list=>(

          
          <CardSc key={list.id}>
        
        <CarouselSC>
          <CarouselSC.Item>
            <ImgSC
              className="d-block w-100"
              src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026269/WhatsApp_Image_2022-10-12_at_6.47.14_AM_j65tsr.jpg"
              alt="First slide"
            />
            <CarouselSC.Caption>

            </CarouselSC.Caption>
          </CarouselSC.Item>
          <CarouselSC.Item>
            <ImgSC
              className="d-block w-100"
              src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026269/WhatsApp_Image_2022-10-12_at_6.47.15_AM_1_kko2ib.jpg"
              alt="Second slide"
            />

            <CarouselSC.Caption>

            </CarouselSC.Caption>
          </CarouselSC.Item>
          <CarouselSC.Item>
            <ImgSC
              className="d-block w-100"
              src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1666026270/WhatsApp_Image_2022-10-12_at_6.38.45_AM_yfhqhl.jpg"
              alt="Third slide"
            />

            <CarouselSC.Caption>

            </CarouselSC.Caption>
          </CarouselSC.Item>
        </CarouselSC>
        <Card.Body>
          <p>Location / ipsum</p>
          <Card.Title>{list.name}</Card.Title>
          <Card.Text>
            <ul>
              <li><FontAwesomeIcon icon={faBed} /> 3</li>
              <li><FontAwesomeIcon icon={faBath} /> 3</li>

              <li><FontAwesomeIcon icon={faChartArea} /> 120 mts<sup>2</sup></li>
            </ul>

            <p><strong>LF:</strong> <FontAwesomeIcon icon={faDollarSign} /> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
            <p><strong>MG:</strong> <FontAwesomeIcon icon={faDollarSign} /> 1'500.000 cop <FontAwesomeIcon icon={faPersonCircleQuestion} /></p>
          </Card.Text>
          <Link to="templated" ><ButtonSC variant="primary">Details</ButtonSC></Link>
          <ButtonSC variant="danger" onClick={()=>deletePropertie(list.id)}>Deleted</ButtonSC>
          <ButtonSC variant="success">Updated</ButtonSC>
        </Card.Body>
      </CardSc>
          ))
      }
        
      </div>
      
      
     
   
    </Father>


  )
}

export default Home