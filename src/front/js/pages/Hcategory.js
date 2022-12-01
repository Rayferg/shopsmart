import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card"

export const Hcategory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center categoryCont">
			<h2 className="color01">Home Goods</h2>
			<div className="row">
				{store.beanHomegoods.map((item, idx) => {
					return (
						<div className="col-3" key={idx}>
							<Card item={item} id={idx} />
						</div>
					)
				})}
			</div>
		</div>
	);
};
