import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

    
function BudgetList({color}) {
    const {store, actions} = useContext(Context)
    const [values, setValues] = useState({
        "total": 0,
        "left": 0
    })
    const [items, setItems] = useState([])
   
    const handleBudget = (e) => {
        let v = {
            "total": e.target.value,
            "left": e.target.value - store.beanBudgetList.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0)
        }
        console.log(v.left);
        setValues(v)
    }
    
    
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
                                <i onClick={()=> actions.handleItemDelete(i)} className="fas fa-trash-alt" style={{color:color}}></i>
                            </div>
                })}
            </div>
            <div className="budget-remainder">
                <p style={{color:color}}>Left: {values.left}</p>
            </div>
        </div>

  );
}

export default BudgetList;
