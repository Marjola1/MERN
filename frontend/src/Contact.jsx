import React, { useState, useEffect} from 'react';
import {Container, Form, Button,Row,Col,Image} from 'react-bootstrap';

const Contact = () =>{
    const[addContact,setAddContact]=useState({
        firstName:"",
        lastName:"",
        email:"",
        comment:"",
    })

    const handleChange=(e)=>{ 
    setAddContact({ ...addContact,[e.target.name ]: e.target.value })
  }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios
        .post("http://localhost:500/addContact", addContact)
        .then((res)=>{
            console.log("Contact added")
        })
        .catch((err)=>console.log("contact not added",err));
    };
  
    
  return (
    <Container>
    <Form  onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="firstName">
      <Form.Label>First name</Form.Label>
      <Form.Control 
      type="text"  
      value={addContact.firstName} 
      name="firstName"
      onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="lastName">
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" value={addContact.lastName}
       name="lastName"
        onChange={handleChange}
          />
    </Form.Group>
    <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email</Form.Label>
      <Form.Control
       type="email"
       value={addContact.email} 
      name="email"  
      onChange={handleChange} 
       />
    </Form.Group>
    // keto te jene njesoj si te  schema
    <Form.Group className="mb-3" controlId="comment">
    <Form.Label>Comment</Form.Label>
    <Form.Control type="text"
    value={addContact.comment} 
      name="comment"  
      onChange={handleChange}   />
     </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </Container>
  );

}
export default Contact;