import { Link } from "react-router-dom";
import React from "react";

const Card = (props) => {
  // console.log(props.id)
  return (
    <div className="card" style={{ width: "12rem" }}>
      <Link to={"/ViewItem/" + props.type + props.id}>
        <img
          src={props.item.image}
          className="card-img-top card-img"
          alt="..."
        />
      </Link>
      {/* <Link to={`/pages/AboutCharacterPage/${breed.id}`}>
            <span className="-btn btn btn-primary"><i>Learn More</i></span>
			    </Link> */}
      <div className="card-body">
        <h5 className="card-title">
          {" $"}
          {props.item.targetPrice}
        </h5>
        <h5 className="card-title">{props.item.name}</h5>
        {/* <p className="card-text">{props.item.description}</p> */}
      </div>
    </div>
  );
};

export default Card;
