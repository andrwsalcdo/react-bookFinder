import React, { Component } from "react"
import "./App.css"
import { Grid, Col, Row } from 'react-bootstrap'
import * as api from './api/api'
import Header from "./components/Header"
import Books from './components/Books'


class App extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			text: "Harry Potter"
		};
	}

	componentDidMount() {
		this.getBooks();
	}

	getBooks = () => {
    fetch(api.googleUrl + this.state.text)
      .then(results => {
        return results.json(); 
      }).then(data => {
        this.setState({books: data.items}, () => console.log(this.state))
      })
  }

	render() {
		return (
          <div>
				    <Header />
						<Grid>
							<Row>
								<Col xs={12} md={12} lg={12}>
            			<Books books={this.state.books} />
								</Col>
							</Row>
						</Grid>
          </div>
		);
	}
}

export default App;