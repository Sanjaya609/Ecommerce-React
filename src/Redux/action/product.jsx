import { PRODUCT_LIST } from "../Constants";

export const productList=()=>{
    return{
        type:PRODUCT_LIST,
        payload:[],
    };
};