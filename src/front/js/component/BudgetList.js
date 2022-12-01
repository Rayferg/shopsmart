import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

    
function BudgetList() {
    const {store, actions} = useContext(Context)
    const [values, setValues] = useState({
        "total": 0,
        "left": 0
    })
    const [items, setItems] = useState([])
    // let params = useParams()
    // // console.log(params);
    // let type = params.type
    // let item = null
    // if(type == "special"){
    //     item = actions.getSpecials(parseInt(params.id))
    //     console.log(item);
    // }else if(type == "electronics"){
    //     item = actions.getElectronics(parseInt(params.id))
    // }else{
    //     item = actions.getHomeGoods(parseInt(params.id))
    // }
    //console.log(store.beanBudgetList.reduce(function (acc, obj) { return acc + obj.value; }, 0));
    const handleBudget = (e) => {
        let v = {
            "total": e.target.value,
            "left": e.target.value - store.beanBudgetList.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0)
        }
        console.log(v.left);
        setValues(v)
    }
    
    
    return (  
        <div className='budget-list'>
            <div className="budget-total">
                <input type="number" placeholder="enter budget" onChange={(e) => handleBudget(e)}/>
            </div>
            <div className="budget-items">
                {store.beanBudgetList.map((obj, i) => {
                    return  <p 
                                key={i}
                            >
                                {obj.name}{obj.value}
                                <button onClick={()=> actions.handleItemDelete(i)}>Delete</button>
                            </p>
                })}
            </div>
            <div className="budget-remainder">
                <p>Left: {values.left}</p>
            </div>
        </div>

  );
}

export default BudgetList;
