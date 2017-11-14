import React from 'react';
import ReactDOM from 'react-dom';

import {FormGroup, FormControl, ControlLabel, Radio, Checkbox} from 'react-bootstrap';

class ProductOptions extends React.Component {
	constructor() {
		super();
		this.getListOptions = this.getListOptions.bind(this);
		this.getFormField = this.getFormField.bind(this);
	}

	getFormField(options, label) {
		if(options.type === 'select') {
			const fieldOptionsArr = [];
			const fieldOptions = Object.assign({}, options);
			delete fieldOptions.type;
			delete fieldOptions.selected;
			for(let i in fieldOptions) {
				fieldOptionsArr.push(<option value={fieldOptions[i]}>{i}</option>)
			}
			return(
					<FormGroup controlId="formControlsSelect">
				      <ControlLabel>{label}</ControlLabel>
				      <FormControl componentClass="select" placeholder="select">
				        {fieldOptionsArr}
				      </FormControl>
				    </FormGroup>
				)
		} else if(options.type === 'radio') {
			const fieldOptionsArr = [];
			const fieldOptions = Object.assign({}, options);
			delete fieldOptions.type;
			delete fieldOptions.selected;
			for(let i in fieldOptions) {
				fieldOptionsArr.push(
						<Radio name="radioGroup" value={fieldOptions[i]}>{i}</Radio>
					)
			}
			return(
					<FormGroup>
					  <ControlLabel>{label}</ControlLabel>
				      {fieldOptionsArr}
				    </FormGroup>
				)
		} else if(options.type === 'checkbox') {
			const fieldOptionsArr = [];
			const fieldOptions = Object.assign({}, options);
			delete fieldOptions.type;
			delete fieldOptions.selected;
			for(let i in fieldOptions) {
				fieldOptionsArr.push(
						<Checkbox name="radioGroup" value={fieldOptions[i]}>{i}</Checkbox>
					)
			}
			return(
					<FormGroup>
					  <ControlLabel>{label}</ControlLabel>
				      {fieldOptionsArr}
				    </FormGroup>
				)
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
					let currentOptions = currentCategory.map(options => {
						let getFormField = this.getFormField(options, i);
						return getFormField;
					})
					listCategory.push(<div className="category"><div className="options">{currentOptions}</div></div>)
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