import { PRODUCT_LIST } from "../Constants";

const initialState={
    products:[],
};

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_LIST:
            return {
                ...state,
                products:action.payload,
            }
    }
}