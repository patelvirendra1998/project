import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {  message } from 'antd';

const LoginBtn=()=>{
     const [input, setInput]=useState({});


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}))
   }

   const handleSubmit=()=>{
      let api="http://localhost:3000/customer";
      axios.post(api, input).then((res)=>{
        setShow(false);
        message.success("You are Registered!!!")
      })   
   }

    return(
        <>
         <div id='buttonbox'>
         <Button variant="primary">Login</Button>
          
         <Button variant="primary" onClick={handleShow}>Registration</Button>
         </div>


         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter name</Form.Label>
              <Form.Control
                type="text" name="name" onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" name="email" onChange={handleInput}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password" name="password" onChange={handleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Registration
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default LoginBtn;