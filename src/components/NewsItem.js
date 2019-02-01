import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import './NewsItem.css'

const NewsItem = (props) => {
  return (
	<a href={props.item.url} target="_blank" rel="noopener noreferrer">
		<Card className="card" inverse>
			<CardImg width="100%" src={props.item.urlToImage}  alt={props.item.title}  className="card-filter"/>
			<CardImgOverlay>
				<CardTitle>{props.item.title}</CardTitle>
			</CardImgOverlay>
  		</Card>
	</a>
  )
}

export default NewsItem

// {/* <Card className="card" inverse>
// 		<CardImg width="100%" src={item.urlToImage}  alt={item.title}  />
// 		<CardImgOverlay>
// 			<CardTitle>{item.title}</CardTitle>
// 			<CardText>{item.description}</CardText>
// 			<CardText>
// 				<small className="text-muted">{item.publishedAt}</small>
// 			</CardText>
// 		</CardImgOverlay>
//   	</Card> */}