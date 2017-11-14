import React from 'react';
import ReactDOM from 'react-dom';

import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class ProductOptions extends React.Component {
	constructor() {
		super();
		this.getListOptions = this.getListOptions.bind(this);
	}
	getFormField(type, label) {
		if(type === 'select') {
			<FormGroup controlId="formControlsSelect">
		      <ControlLabel>{label}</ControlLabel>
		      <FormControl componentClass="select" placeholder="select">
		        <option value="select">select</option>
		        <option value="other">...</option>
		      </FormControl>
		    </FormGroup>
		}
	}

	getListOptions() {
		const defaultOptions = this.props.defaultOptions;
		const productOptions = this.props.productOptions;
		let listCategory = [];
		let listOptions = [];
		if(productOptions) {
			productOptions.map(category => {
				for(let i in category) {
					let currentCategory = category[i];
					let options = currentCategory.map(option => {
						let currentOption = []
						for(let j in option) {
							console.log(j);
							currentOption.push(<div>{j}</div>);
						}
						return currentOption;
					})
					listCategory.push(<div className="category"><h4>{i}</h4><div className="options">{options}</div></div>)
				}
			})
		}
		return listCategory;
	}

	render() {
		const listOptionsNode = this.getListOptions() || null
		return(
			<div className="customizations">
				<h3>Customizations</h3>
				{listOptionsNode}
			</div>
		)
	}
}

export default ProductOptions;