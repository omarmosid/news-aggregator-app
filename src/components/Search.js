import React, { Component } from 'react'
import './Search.css'

import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';

export class Search extends Component {	

	render() {
		return (
		  <div className="search-container">
			<InputGroup>
				<Input onChange={this.props.handleChange} name="searchTerm" />
				<InputGroupAddon addonType="append">
					<Button onClick={this.props.handleClick}>Search</Button>
				</InputGroupAddon>
			</InputGroup>
		  </div>
		)
	}
}

export default Search;
