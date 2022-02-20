import React from 'react'
import Photo from '../../Resource/video.png'

export const ProductDisplay = ({name,price,stock,image,release,}) => {
  return (
    <>
    <div className="col-lg-3">
    <div className="card" style={{"padding":"1.5rem","width":"100%"}}>
          <div className="card-image" >
            <img className='image' src={`https://electronic-ecommerce.herokuapp.com/${image}`} alt="Product Photo"/>
          </div>
          <div className="product-description-container">
            <div>
              <h3 className="product-name">{name}</h3>
              <p className="product-price">{price}<span style={{"float":"right",'color':"green"}}>Stocks left: {stock}</span></p>
              <p className="product-date">Released On:{release}</p>
            </div>
          </div>
          <button className='to-card' style={{"background":"blue","color":"white"}}>Add to cart</button>
        </div>
    </div>
        
    </>

  )
}
