import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

import { useDispatch } from 'react-redux';
import { addcartData } from '../addtocartSlice';


const BestOffer=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();

const loadData=()=>{
   let api="http://localhost:3000/products/?offer=yes";
   axios.get(api).then((res)=>{
    setMydata(res.data);
   })
}

useEffect(()=>{
  loadData();
}, [])


const addDataToCart=(id, name, cate, brand, price, desc, image)=>{
     dispatch(addcartData({id:id, name:name, category:cate, 
      brand:brand, price:price, description:desc,image:image, qnty:1}))
}








const ans=mydata.map((key)=>{
    let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
   return(
    <>
     <Card style={{ width: '250px', marginTop:"20px" }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
        </h4>
        <Card.Text>
           {key.description}
        </Card.Text>
         <h4 style={{color:"red", fontSize:"16px", textDecoration:"line-through"}}> Price : {key.price} </h4> 
         <h5>Offer:  {key.discount}% </h5>
         <h6> Todat Best Price: {offerPrice} </h6>
        <Button variant="primary" 
        onClick={()=>{addDataToCart(key.id, key.name, key.category, key.brand, offerPrice, key.description, key.image)}}>Add To Cart</Button>
      </Card.Body>
    </Card>
    
    </>
   )
})



    return(
        <>
          
          
       <div id="proHeading">
        <h1> Our Best Offer Products</h1>
       </div>
       
       <div id="homeProduct">
        {ans}        
       </div>

        </>
    )
}

export default BestOffer;