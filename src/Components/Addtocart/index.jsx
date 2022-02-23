import React, { useEffect, useState } from 'react'
import photo from '../../Resource/video.png'
import { Modal, Container,Row,Col,Button } from 'react-bootstrap';
//import { CartItem } from './CartItem';

const Addtocart = ({ cartDisplay, setCartDisplay, cartItem, setCartItem, DeleteCartItem,totalPrice,setTotalPrice }) => {
  
  const closeCartModal = () => {
    setCartDisplay(false);
  }
  const Total= 
  setTotalPrice()
  // useEffect(() => <Container />, [cartItem]);
  return (
    <Modal show={cartDisplay} onHide={closeCartModal} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Items Added
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {cartItem.length > 0 ?
            <CartItem
            cartItem={cartItem} 
            DeleteCartItem={DeleteCartItem}/>
          : <span>Nothing in the cart!</span>}
          {console.log(cartItem)}

        </Container>  
      </Modal.Body>
      <Modal.Footer style={{ 'flexDirection': 'column' }}>
        <p>Total Amount: <span>{totalPrice}</span> </p>
        <Button onClick={null}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default Addtocart;


function CartItem({ cartItem,DeleteCartItem }){
  return (
    cartItem.map((item) =>
        <Row key={item.id} style={{ 'padding': "0.5rem" }}>
            <Col xs={12} md={8} style={{ 'display': 'flex' }}>
                <div className='cart-item-image' style={{ 'width': '60px', marginRight: "1rem", display: 'flex', alignItems: 'center' }}>
                    <img src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} alt="laptop" style={{ 'width': '100%' }} />
                </div>
                <div className="cart-product-info" style={{ 'display': 'flex', 'flexDirection': 'column' }} >
                    <p className='cart-product-name'>{item.name}</p>
                    <p className='cart-product-price' >{item.price}</p>
                </div>
            </Col>
            <Col xs={6} md={4} style={{ 'display': 'flex', 'justifyContent': 'end', 'flexDirection': 'column' }}>
                <div className="cart-item-number" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                    <p>item:<span>{item.quantity}</span></p>
                </div>
                <div className="cart-item-delete-btn" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => DeleteCartItem(item.id)}>Delete Item</button>
                </div>
            </Col>
        </Row>)
)
}