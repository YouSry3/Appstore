import React from 'react';
import { Button, Container, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFormcart } from '../rtk/slices/cart-slice';

const Cart = () => {
  const cart =useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc,product)=>{
    acc += product.price;
    return acc;

  },0)

  console.log(cart);
  return (
    <Container>
      <h1 className='py-5'>welcome to Cart</h1>
      <Button variant='primary' className='mb-4' onClick={()=> dispatch(clear())}>Clear Cart </Button>
      
      <h5>Total Price: {totalPrice.toFixed(2)}$</h5>
      
      <Table striped bordered hover size="sm" >

      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
          <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} style={{width:"100px",height:"100px"}}/></td>
          <td>{product.price}$</td>
          <td><Button variant="danger" onClick={()=> dispatch(deleteFormcart(product))}>Delete</Button></td>
        </tr>
        ))}
        

      </tbody>
    </Table>

    </Container>
  );
}

export default Cart;
