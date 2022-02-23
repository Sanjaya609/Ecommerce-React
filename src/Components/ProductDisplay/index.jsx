import React, { useState } from 'react'
import { withCommas } from '../helper'
import dayjs from 'dayjs';

const ProductDisplay = ({ id,name, price, stock, image, release,cartItem,setCartItem }) => {
  const [quantity,setQuantity]=useState(1);
  const [itemStock,setItemStock]=useState(stock);
  const handleAddtoCart=()=>{
    setCartItem([...cartItem,{id,name,price,stock,image,release,quantity}]);
    console.log(cartItem);
    /* cartItem.map((item)=>{
      if (item.id!=id){
        setCartItem([...cartItem,{id,name,price,stock,image,release,quantity}]);
      }else{
        console.log("already added to cart");
      } 
    })*/
  }
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
                <button 
                style={{ 'border': 'none',background:'white',width:'30%'}} 
                onClick={()=>{
                setQuantity(quantity-1);
                setItemStock(itemStock+1);
                }}>-</button>
                <input 
                type="text" 
                style={{'width':'40%',border:"none"}} 
                value={quantity}
                onChange={()=>{setQuantity(quantity-1);
                setItemStock(itemStock+1)}}
                min="0" max={itemStock}/>
                <button 
                style={{ 'border': 'none',background:'white',width:'30%'}} 
                onClick={()=>{setQuantity(quantity+1);
                setItemStock(itemStock-1)}}>+</button>
              </div>
              <div>
              <p className="product-name">{name}</p>
              <p className="product-price">{withCommas(price)}<span style={{ "float": "right", 'color': "green" }}>Stocks left: {itemStock}</span></p>
              <p className="product-date">Released On: {dayjs(release).format("DD-MM-YYYY")}</p>
              </div>
              
            </div>
          </div>
          <button className="btn btn-primary btn-sm" disabled={itemStock != 0 ? false : true} onClick={handleAddtoCart}>Add to cart</button>
        </div>
      </div>

    </>

  )
}
export default ProductDisplay;
