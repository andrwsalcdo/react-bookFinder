import React, { Component } from "react";
import { Grid, Col, Row, Accordion, PanelGroup, Panel, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class Books extends Component {
	render() {
		let bookItems;
		if (this.props.books) {
			bookItems = this.props.books.map(book => {
				let id = book.id;
				let title = book.volumeInfo.title;
				let thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
				let author = book.volumeInfo.authors;
				let publishedDate = book.volumeInfo.publishedDate;
				let description = book.volumeInfo.description;
				let pageCount = book.volumeInfo.pageCount;
				let buyLink = book.saleInfo.buyLink; 
				return (
					<Panel key={id} eventKey={id}>
						<Panel.Heading>
							<Panel.Title>{title}</Panel.Title>
						</Panel.Heading>
						<Panel.Body>
							<Grid>
								<Row>
									<Col xs={3} md={3} lg={3}>
										<img src={thumbnail} role="presentation" />
									</Col>
									<Col xs={8} md={8} lg={8}>
										<ListGroup>
											<ListGroupItem>
												<strong>Author: </strong> {author}
											</ListGroupItem>
											<ListGroupItem>
												<strong>Publish Date: </strong> {publishedDate}
											</ListGroupItem>
											<ListGroupItem>
												<strong>Page Count: </strong> {pageCount}
											</ListGroupItem>
										</ListGroup>
									</Col>
								</Row>
								<Row>
									<Col xs={11} md={11} lg={11}>
										<h4>Book Description</h4>
										{description}
										<hr/>
										<Button href={buyLink} bsStyle="primary">Buy Now</Button>
									</Col>
								</Row>
							</Grid>
						</Panel.Body>
					</Panel>
				);
			});
		}
		return (
			<div>
				<Accordion id="book items">{bookItems}</Accordion>
			</div>
		);
	}
}

export default Books;
