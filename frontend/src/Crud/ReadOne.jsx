import React, {useState, useEffect} from "react";
import {Container, Row, Col, Button, Image } from "react-bootstrap";
import {useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const DetailItem = () => {
// Per te marre elementin me id perkatese
const { id } = useParams();
// Metode navigimi (nga njeri komponent tek tjetri)
const nav = useNavigate();
// Ruajta e informacionit te nje elementi (object)
const [items, setItems] = useState({});
useEffect(() => {
    const fetchData = async () => {
    await axios.get('http://localhost:5000/oneItem/' + id)
    .then((res) => {
    // Test
    console.log(res.data)
    // Vendosja e te dhenave tek array
    setItems(res.data)
    }).catch((err) => {
    // Nese nuk shfaqen te dhenat
    console.log('Data not showing ' + err)
    })
    };
    // therritja e funksionit
    fetchData()
    }, [])
return( 
    <Container className="my-5">
<Row>
<Col xs={12} md={6}>
{/* Informacionet e elementit */}
<h1>Data</h1>
<h2>{item.name}</h2>
<p>{item.description}</p>
<div className="d-grid gap-2 d-md-block">
{/* Therritja e funksionit Delete */}
<Button variant="warning" className='me-3'href={`/update/${item._id}`}>Update</Button>
<Button variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
</div>
</Col>
<Col xs={12} md={6}>
{/* imazhi */}
<h1>Image</h1>
<Image
src={`http://localhost:5000/images/${item.photo}`}
alt='Uploaded'
rounded
className='img-fluid'
/>
</Col>
</Row>
</Container>

)}

export default ReadOne;