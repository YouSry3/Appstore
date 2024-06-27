import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/product-slice';
import { addToCart } from '../rtk/slices/cart-slice';
import "./product.css";

const Products = () => {
  const products = useSelector((state)=> state.products);


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());

  },[])
  return (
    <Container className='py-5'>
      <section>
        <img src="https://tse1.mm.bing.net/th?id=OIP.NuzNQRmQLcQlu3EX9IhYBgHaDt&pid=Api&P=0&h=220" alt="" />
        <h3>Go anywhere with eber</h3>
          <div className="btns">
          <a href="/">
        <button className='blue'>Go To Githup </button>
        </a>
        <a href="/">
        <button className='red'>Document Home  </button>
        </a>
          </div>
      </section>
      <Row className='py-5'>
        {products.map((product)=>
            <Col key={product.id}>
            <Card style={{ width: '18rem' }}>
          <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>
              {product.price}
            </Card.Text>
            <Button variant="primary" onClick={()=> dispatch(addToCart(product))}>Add to Cart</Button>
          </Card.Body>
          </Card>  
            </Col>
        )}
      
      </Row>
   </Container>
  );
}

export default Products;
