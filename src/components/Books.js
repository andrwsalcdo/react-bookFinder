import React, { Component } from "react";
import { List } from "material-ui/List";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class Books extends Component {
	render() {
		let bookItems;
		if (this.props.books) {
			bookItems = this.props.books.map(book => {
				let id = book.id;
				let title = book.volumeInfo.title;
				let thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
				let author = book.volumeInfo.authors;
				let description = book.volumeInfo.description;
				return (
					<Card key={id}>
						<CardHeader title={title} subtitle={author} avatar={thumbnail} />
						<CardText>{description}</CardText>
						<CardActions>
							<FlatButton label="Buy"  />
						</CardActions>
					</Card>
				);
			});
		}
		return (
			<div>
				<List> {bookItems} </List>
			</div>
		);
	}
}

export default Books;
