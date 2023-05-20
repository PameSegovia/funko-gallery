import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Cards.css"


const Cards = () => {
	const { data } = useContext(dataContext);
	return data.map((card) => {
		return (
			<div className="target" key={card.id}>
				<img src={card.img} alt="img-product-card" width="100%" />
			</div>
		)
	})
}
export default Cards;