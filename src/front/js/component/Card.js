import { ListItem } from '@material-ui/core'
import React from 'react'

const Card = (props) => {
  return (
    <div className="card" style={{"width": "12rem"}}>
        <img src={props.item.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{" $:"}{props.item.price}</h5>
            <h5 className="card-title">{props.item.name}</h5>
            {/* <p className="card-text">{props.item.description}</p> */}
        </div>
    </div>
  )
}

export default Card