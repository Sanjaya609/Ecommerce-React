import React, { useState } from 'react'
import { withCommas } from '../helper'
import dayjs from 'dayjs';

const ProductDisplay = ({ name, price, stock, image, release, }) => {
  return (
    <>
      <div className="col-lg-3" style={{ 'height': '360px', marginBottom: "2rem" }}>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ "padding": "1.5rem", "width": "100%", 'border': 'none' }}>
          <div className="card-image" style={{ 'height': '175px', display: "flex", justifyContent: "center",paddingBottom:'1rem'}} >
            <img className='image'
              src={`https://electronic-ecommerce.herokuapp.com/${image}`}
              alt="Product Photo"
              style={{ "objectFit": "cover", maxHeight: "100%" }} />
          </div>
          <div className="product-description-container">
            <div style={{'display':'flex',flexDirection:'column'}}>
              <div className='product-selector form-control' style={{ 'height': "100%", width:'25%', display: 'flex','padding':'0'}}>
                <button style={{ 'border': 'none',background:'white',width:'30%'}}>-</button>
                <input type="text" style={{'width':'40%',border:"none"}} />
                <button style={{ 'border': 'none',background:'white',width:'30%'}}>+</button>
              </div>
              <div>
              <p className="product-name">{name}</p>
              <p className="product-price">{withCommas(price)}<span style={{ "float": "right", 'color': "green" }}>Stocks left: {stock}</span></p>
              <p className="product-date">Released On: {dayjs(release).format("DD-MM-YYYY")}</p>
              </div>
              
            </div>
          </div>
          <button className="btn btn-primary btn-sm" disabled={stock != 0 ? false : true}>Add to cart</button>
        </div>
      </div>

    </>

  )
}
export default ProductDisplay;
