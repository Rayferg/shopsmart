import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "../component/Card"
import Banner from "../component/Banner";

const RegularView = () => {
    const { store, actions } = useContext(Context);
    return (
    <div className="text-center bodyCont bg-color04">
      <Banner />
      <h2 className="catecolor">Specials!</h2>
      <Link to="/Scategory">
        <span className="viewAllAncor">View All Specials</span>
      </Link>
      <div className="itemCont">
        {store.beanSpecials.map((item, idx) => {
          return (
            <div className="itemDiv" key={idx}>
              <Card item={item} id={idx} type="specials" />
            </div>
          );
        })}
      </div>
      <h2 className="catecolor">Electronics!</h2>
      <Link to="/Ecategory">
        <span className="viewAllAncor">View All Electronics</span>
      </Link>
      <div className="itemCont">
        {store.beanElectronics.map((item, idx) => {
          return (
            <div className="itemDiv" key={idx}>
              <Card item={item} id={idx} type="electronics" />
            </div>
          );
        })}
      </div>
      <h2 className="catecolor">Home Goods!</h2>
      <Link to="/Hcategory">                
            <span className="viewAllAncor">View All Home Goods</span>
        </Link> 
      <div className="itemCont">
        {store.beanHomegoods.map((item, idx) => {
          return (
            <div className="itemDiv" key={idx}>
              <Card item={item} id={idx} type="homeGoods" />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default RegularView