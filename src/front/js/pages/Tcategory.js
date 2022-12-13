import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card"

export const Tcategory = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center categoryCont catpage">
			<h2 className="catecolor">Electronics</h2>
			<div className="row">
				{store.beanToys.map((item, idx) => {
                    // console.log(store.beanToys);
					return (
						<div className="col-3" key={idx}>
							<Card item={item} id={idx} type="toys"/>
						</div>
					)
				})}
			</div>
		</div>
	);
};
