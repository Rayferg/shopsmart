import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import Pagination from "../component/Pagination";
import Card from "../component/Card";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import RegularView from "./RegularView";
import FilteredView from "./FilteredView";

export const Home = () => {
  const { store, actions } = useContext(Context);
      let nothome = store.notHome
	console.log(nothome);
  return (
<div>
			{/* {nothome == false ? <FilteredView/> : <RegularView/>} */}
			{nothome == false ? <RegularView/> : <FilteredView/>}

		</div>
  );
};
