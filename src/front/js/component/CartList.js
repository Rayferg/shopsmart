import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

    
function CartList() {
    const {store, actions} = useContext(Context)
    const [values, setValues] = useState(0)
    // setValues(parseInt(0))
   
    const handlecart = (e) => {
        let v = values + e.target.value

        values: v
        
        // console.log(v.left);
        setValues(v)
    }
    
    
    return (  
        <div className='cart-list'>
            <div className="cart-items">
                {store.beanCart.map((obj, i) => {
                    return  <div 
                                key={i}
                                className="cart-item"
                            >
                                <h5 className="cart-item-name">{obj.name}</h5>
                                <h5>{obj.value}</h5>
                                <i onClick={()=> actions.handleCartItemDelete(i)} className="fas fa-trash-alt"></i>
                            </div>
                })}
            </div>
            <div className="cart-remainder">
                <p>Left: {values.left}</p>
            </div>
        </div>

  );
}

export default CartList;
