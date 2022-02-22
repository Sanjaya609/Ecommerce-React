import React from 'react'
import ProductDisplay from '../../../Components/ProductDisplay'

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="wrapper">
        <div className="content" style={{ "padding": "1rem 1.5rem 0 1.5rem", 'display': 'flex' }}>
          <div className="row">
            {products.map((item) => (
              <ProductDisplay
                name={item.name}
                price={item.price}
                stock={item.stock}
                image={item.image}
                release={item.createDate}
                key={item.id} />
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Products;
