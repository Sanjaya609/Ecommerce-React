import React from 'react'
export const ProductDetail = ({ productDetail }) => {
  //console.log(productDetail,"PRODUCT DETAIl");
  return (
    <div className="container productdetail-container" >
      <div className="row" style={{ padding: "4rem" }}>
        <div className="col-lg-8" style={{ padding: "1rem", display: "flex" }}>
          <div className="productdetail-image col-lg-6">
            <img src={`https://electronic-ecommerce.herokuapp.com/${productDetail.image}`} alt={`${productDetail.name}`} style={{ width: "100%" }} /></div>
          <div className="col-lg-6" style={{ padding: "1rem" }}>
            <p>{productDetail.name}</p>
            <p>{productDetail.price}</p>
            <p>Quantity: <div className='product-selector form-control' style={{ 'height': "100%", width: '25%', display: 'flex', 'padding': '0' }}>
              <button
                style={{ 'border': 'none', background: 'white', width: '30%' }}
              >-</button>
              <input
                type="text" value="1"
                style={{ 'width': '40%', border: "none" }}
              />
              <button
                style={{ 'border': 'none', background: 'white', width: '30%' }}
              >+</button>
            </div> </p>
            <div className="productdetail-desc-footer">
            <button type="button" 
            style={{backgroundColor:"#26abd4"}}
            className="btn btn-outline-secondary" 
            style={{ 'marginRight': "1rem" }} 
            >Buy Now</button>
            <button 
            type="button" 
            className="btn btn-success" >Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
