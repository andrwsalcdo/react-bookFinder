import React, { Component } from "react";


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
				
			});
		}
		return (
			<div>
				books
			</div>
		) 
	}
}

export default Books;