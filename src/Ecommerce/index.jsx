import React, { useEffect ,useState} from 'react'
import { Body } from './Body'
import { Navbar } from './Navbar'
import axios from "axios";


export const Ecommerce = () => {
  const [products,setProducts]=useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product");
    console.log(response.data.data.product);
    if (response?.data&& response.data.status==="success"){
      setProducts(response.data.data.product||[]);
    } 
  }
  useEffect(() => { fetchProducts(); }, []);
  return (
    <>
      <Navbar />
      <Body products={products}/>
    </>
  )
}
