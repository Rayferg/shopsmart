import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

    
function ViewItem() {
    const {store, actions} = useContext(Context)
    const [value, setValue] = useState()
    let params = useParams()
    // console.log(params);
    let type = params.type
    let item = null
    if(type == "special"){
        item = actions.getSpecials(parseInt(params.id))
        console.log(item);
    }else if(type == "electronics"){
        item = actions.getElectronics(parseInt(params.id))
    }else{
        item = actions.getHomeGoods(parseInt(params.id))
    }
    
    
    
    return (  
            <div className='viewitemPageContainer'>
                <img 
                    className="aboutImg"
                    src={item.image} alt="..." 
                />
                <div className='midSection'>
                    <h6><strong>{item.name}</strong></h6>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect02">
                            <option selected>Choose Price...</option>
                            <option value="1">Bean Shop {item.beanShopPrice}</option>
                            <option value="2">Walmart {item.walmartPrice}</option>
                            <option value="3">Targer {item.targetPrice}</option>
                        </select>
                    </div>
                    <p className="itemDesc">
                        {item.description}
                    </p>
                    <button id="btncb" className="btn btn-info ">Add to Cart</button>
                    <button id="btncb"className="btn btn-info ">Add to Budget Buddy</button>
                </div>
            </div>

  );
}

export default ViewItem;
