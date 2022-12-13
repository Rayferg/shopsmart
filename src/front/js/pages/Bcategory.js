import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card"

export const Bcategory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center categoryCont catpage">
			<h2 className="catecolor">Electronics</h2>
			<div className="row">
				{store.beanBeauty.map((item, idx) => {
					return (
						<div className="col-3" key={idx}>
							<Card item={item} id={idx} type="beauty"/>
						</div>
					)
				})}
			</div>
		</div>
	);
};
