import React from 'react'
import photo from '../../Resource/video.png'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

const Addtocart = ({ cartDisplay, setCartDisplay }) => {
  const closeCartModal = () => {
    setCartDisplay(false);
  }
  return (
    <Modal show={cartDisplay} onHide={closeCartModal} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Items Added
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8} style={{ 'display': 'flex' }}>
              <div className='cart-item-image' style={{ 'width': '60px', marginRight: "1rem", display: 'flex', alignItems: 'center' }}>
                <img src={photo} alt="laptop" style={{ 'width': '100%' }} />
              </div>
              <div className="cart-product-info" style={{ 'display': 'flex', 'flexDirection': 'column' }} >
                <p className='cart-product-name'>Dell XPS 12</p>
                <p className='cart-product-price' >Rs.1300</p>
              </div>
            </Col>
            <Col xs={6} md={4} style={{ 'display': 'flex', 'justifyContent': 'end','flexDirection':'column' }}>
              <div className="cart-item-number" style={{ 'display': 'flex', 'justifyContent': 'center'}}>
              <p>item:<span>9</span></p>
              </div>
              <div className="cart-item-delete-btn" style={{ 'display': 'flex', 'justifyContent': 'center'}}>
              <button type="button" className="btn btn-danger btn-sm">Delete Item</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ 'flexDirection': 'column' }}>
        <p>Total Amount: <span>Rs 1300</span> </p>
        <Button onClick={null}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default Addtocart;