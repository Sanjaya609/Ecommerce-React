import React, { useEffect, useState } from 'react'
import Body from './Body'
import Navbar from './Navbar'
import axios from "axios";
import Filter from '../Components/Filter';
import Addtocart from '../Components/Addtocart';
import { withCommas } from '../Components/helper'
import dayjs from 'dayjs';

const Ecommerce = () => {

  const [filterModal, setfilterModal] = useState(false);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setfilteredProduct] = useState([]);
  //const [itemNumber,setItemNumber]=useState(0);
  const [cartItem,setCartItem]=useState([]);
  const [totalPrice,setTotalPrice]=useState(0);

  const DeleteCartItem=(id)=>{
    console.log(id);
    const updatedCartItem= cartItem.filter(item=>item.id!=id);
    console.log(updatedCartItem);
    setCartItem(updatedCartItem);
  }
  const filter = ({priceMin, priceMax, filterCategory,dateMin,dateMax}) => {
    if (priceMin ===0 &&
        priceMax === 0 &&
      filterCategory ==='default'/* &&
      dateMin===0 */){
        setfilteredProduct(products);
    } else {
      const filteredItems = products.filter((product) => {
        console.log( parseInt(product.price.slice(1)))
        let price = parseInt(product.price.slice(1));
        let category = product.category[1];
      /* 
        let date=dayjs(product.date).format("DD-MM-YYYY");
        let minDate= dayjs(dateMin).format("DD-MM-YYYY");
        let maxDate=dateMax.format("DD-MM-YYYY"); 
        console.log(minDate,date,dateMax);
        console.log(minDate>date);
        console.log(category);*/
        let valid = price >= priceMin && price <= priceMax || category === filterCategory /* ||date>=minDate&&date<=maxDate */;
        console.log(priceMin, priceMax, filterCategory, price, valid);
        return valid;
      });
      setfilteredProduct(filteredItems);
    }
  };
  //console.log(cartItem);
  const fetchProducts = async () => {
    const response = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product");
    if (response?.data && response.data.status === "success") {
      setProducts(response.data.data.product || []);
      setfilteredProduct(response.data.data.product);
    }
  }
  useEffect(() => { fetchProducts(); }, []);
  return (
    <>
      {filterModal ? <Filter filter={filter} filterModal={filterModal} setfilterModal={setfilterModal} /> : null}
      {cartDisplay ?<Addtocart 
        cartDisplay={cartDisplay} 
        setCartDisplay={setCartDisplay} 
        cartItem={cartItem} 
        setCartItem={setCartItem} 
        DeleteCartItem={DeleteCartItem}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice} /> : null}
      <Navbar setCartDisplay={setCartDisplay} Number={cartItem.length}/>
      <Body setfilterModal={setfilterModal} products={filteredProduct} cartItem={cartItem} setCartItem={setCartItem} />
    </>
  )
}
export default Ecommerce;