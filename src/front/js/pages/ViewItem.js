import React, { useContext, useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function ViewItem() {
  const { store, actions } = useContext(Context);
  const [value, setValue] = useState();
  let params = useParams();
  let selectedValue = useRef("");
  console.log(params);
  let type = params.type;
  let item = null;
  if (type == "specials") {
    item = actions.getSpecials(parseInt(params.id));
    console.log(item);
  } else if (type == "electronics") {
    item = actions.getElectronics(parseInt(params.id));
  } else if (type == "beauty") {
    item = actions.getBeauty(parseInt(params.id));
  } else if (type == "toys") {
    item = actions.getToys(parseInt(params.id));
  } else if (type == "homegoods") {
    item = actions.getHomeGoods(parseInt(params.id));
  } else if (type == "allData"){
    item = actions.getAllData(parseInt(params.id))
  }

  return (
    <div className="viewitemPageContainer">
      <div className="viewitemPageInfo">
        <img className="viewPageImg" src={item.image} alt="..." />
        <div className="midSection">
          <h1>
            <strong>{item.name}</strong>
          </h1>
          <h6>
            We scoured the internet looking for the best options for you.
            <br />
            This is what we found
            <br />
            Enjoy the best Prices we could find
          </h6>
          <div className="input-group mb-3 ">
            <select
              className="custom-select costSelect"
              id="inputGroupSelect02"
              ref={selectedValue}
            >
              <option selected>Choose Price...</option>
              <option value={item.costcoPrice}>
                Costco {item.costcoPrice}
              </option>
              <option value={item.walmartPrice}>
                Walmart {item.walmartPrice}
              </option>
              <option value={item.targetPrice}>
                Target {item.targetPrice}
              </option>
            </select>
          </div>
          <h5>
            <strong>Item Description</strong>
            <br />
            {item.Description}
          </h5>
          <button
            id="btncb"
            className="btn btn-info "
            onClick={() =>
              actions.addToCart(item.name, selectedValue.current.value)
            }
          >
            Add to Cart
          </button>
          <button
            className="btn btn-info"
            onClick={() =>
              actions.addToBudget(item.name, selectedValue.current.value)
            }
          >
            Add to Budget Buddy
          </button>
        </div>
      </div>
      <Link to="/">
        <i className="-btn btn btn-danger" style={{ width: "400px" }}>
          {" "}
          RETURN HOME
        </i>
      </Link>
    </div>
  );
}

export default ViewItem;
