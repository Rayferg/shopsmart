import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

    
function ViewItem() {
    const {store, actions} = useContext(Context)
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
                    src={item.image} alt="..." />
                <div className='midSection'>
                    <h6><strong>Name: </strong>{item.name}</h6>
                    <h5>{item.price}</h5>
                    <p>
                        {item.description}
                    </p>
                </div>

                <div className='rightSection'>
                    {/* <h6><strong>Price: </strong>{item.price}</h6>
                    <h6><strong>Image: </strong>{item.image}</h6>
                    <h6><strong>Description: </strong>{item.description}</h6> */}
                </div>
                <div>
                {/* <Button href="#">Link</Button> <Button type="submit">Add to Cart</Button>{' '} 
                <Button href="#">Link</Button> <Button type="submit">Add to Budget Buddy</Button>{' '} */}
                </div>
            </div>

  );
}

export default ViewItem;
