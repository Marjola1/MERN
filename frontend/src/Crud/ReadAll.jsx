import React, { useState,useEffect } from 'react'
import axios from "axios"
import Props from "./Props"; 

import {Container, Row, Col, Card, Button} from 'react-bootstrap' 
export const ReadAll = () => {
    const[items, setItems]=useState([])
    useEffect(() => {
        const fetchData = async () => {
        await axios.get('http://localhost:5000/readAll')
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
        
  return (
    <Container className="my-5">
    <h1>Items page</h1>
    <Row>
    {/* Cikli per shfaqen e informacioneve */}
    {/* Kush krijohet i fundit shfaqet i pari (reverse)*/}
    {[...items].reverse().map((item, index) => {
    return (
    <Col key={index} xs={12} md={6} lg={4} className="mt-5">
    <Props {...item} />
    </Col>
    )})}
    </Row>
    </Container>
    
  )
}
export default ReadAll;