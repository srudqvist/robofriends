import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
	if (true) {
		throw new Error("Noo");
	}
	return (
		<>
			{robots.map((user, i) => {
				return (
					<Card
						key={robots[i].id}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</>
	);
};
export default CardList;
