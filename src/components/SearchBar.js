import React from 'react';

const SearchBar = (props) => {
	// const localRadioChangeHandler = (e) => {
	// 	props.changeHandler(e);
	// };

	// const localFilterHandler = (e) => {
	// 	props.filterHandler(e);
	// };
	return (
		<div>
			<strong>Sort by:</strong>
			<label>
				<input
					type="radio"
					value="Alphabetically"
					checked={props.alphabetically}
                    onChange={props.changeHandler}
                    
				/>
				Alphabetically
			</label>
			<label>
				<input type="radio" value="Price" checked={props.price} onChange={props.changeHandler} />
				Price
			</label>
			<br />

			<label>
				<strong>Filter:</strong>
				<select name="filterOption" onChange={props.changeHandler}>
					<option value="">All Stocks</option>
					<option value="Tech">Tech</option>
					<option value="Sportswear">Sportswear</option>
					<option value="Finance">Finance</option>
				</select>
			</label>
		</div>
	);
};

export default SearchBar;
