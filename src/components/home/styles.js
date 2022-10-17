import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export const Father = styled.div`
margin-top:6rem;
margin-bottom:6rem;
display:flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;


`;
export const CardSc = styled(Card)`
width: 18rem;
margin-top:2rem;
border-radius:10px !important;
box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);


`;
export const ImgSC = styled.img`
border-radius:10px;

`; 

export const CarouselSC = styled(Carousel)`
border-radius:10px !important;
`;
export const ButtonSC = styled(Button)`
box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2) !important;

`;

