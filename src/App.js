import React, { Component } from "react";
import "./App.css";
import * as api from './api/api'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/Header";
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
        <MuiThemeProvider>
          <div>
				    <Header />
            <Books books={this.state.books} />
          </div>
			  </MuiThemeProvider>
		);
	}
}

export default App;