import React,{useEffect,useReducer} from 'react';
import axios from 'axios';
let initializstate=[];
let productsReducer=(currentState,action)=>
{
    switch(action.type)
    {
        case"fetch_success":return action.payload
    }
    return currentState;
}
function FakeStore  ()  {
    let [products,productDispatcher]=useReducer
    (productsReducer,initializstate);
    let getProducts=async()=>
    {
        try
        {
            let{data}= await axios.get("https://fakestoreapi.com/products");
            productDispatcher({type:"fetch_success",payload:data})
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>
    {
        getProducts();
    },[])

    return (
        <div>
        {products.map(({id,image})=>
        {
            return<img key={id} src={image} width="200px" height="200px"/>
        })}    
        </div>
    );
}

export default FakeStore;

