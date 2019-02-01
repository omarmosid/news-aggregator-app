import React, { Component } from 'react'
import NewsItem from './NewsItem.js'

import { CardColumns } from 'reactstrap';

export class News extends Component {

	renderItems = () => {
		return this.props.news.map((item) => (
			// <Col lg="3"></Col>
			<NewsItem key={item.url} item={item} />
		));
	}

	render() {
		return (
			// <Row noGutters={true}></Row>
			<CardColumns>
				{this.renderItems()}
			</CardColumns>
		)
	}
}

export default News


