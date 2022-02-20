import React from 'react'
import {FiFilter} from 'react-icons/fi';
import Products from './Products'
export const Body = ({products}) => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="row" style={{'justifyContent':"space-between",'marginTop':"3rem",'padding':'1rem',alignItems:"center"}}>
          <div className="col-lg-1" style={{'paddingLeft':'1.5rem'}}>
          <p className='title-product'>Products</p>
          </div>
          <div className="col-lg-1" style={{'marginRight':'1rem'}}>
          <button type="button" className="btn btn-outline-primary" style={{"color":"blue",}}><FiFilter/>Filter</button>
          </div>
        </div>
        <Products products={products}/>
      </div>
    </div>
  )
}
