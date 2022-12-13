import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

    
function BudgetList({color}) {
    const {store, actions} = useContext(Context)

    //const [items, setItems] = useState([])
   
    const handleBudget = (e) => {
        actions.handleBudget(e.target.value)
    }
    console.log(store);
    
    return (  
        <div className='budget-list' >
            <div className="budget-total">
                <input type="number" placeholder="Enter Budget" onChange={(e) => handleBudget(e)}/>
            </div>
            <div className="budget-items">
                {store.beanBudgetList.map((obj, i) => {
                    return  <div 
                                key={i}
                                className="budget-item"
                            >
                                <h5 className="budget-item-name" style={{color:color}}>{obj.name}</h5>
                                <h5 style={{color:color}}>{obj.value}</h5>
                                <i onClick={(e)=> actions.handleItemDelete(i)} className="fas fa-trash-alt" style={{color:color}}></i>
                            </div>
                })}
            </div>
            <div className="budget-remainder">
                <p style={{color:color}}>Left: {store.values.left}</p>
            </div>
        </div>

  );
}

export default BudgetList;
