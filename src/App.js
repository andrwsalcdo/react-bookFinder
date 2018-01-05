import React, { Component } from "react";
import "./App.css";
import * as api from './api/api'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/Header";


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
				<Header />
			</MuiThemeProvider>
		);
	}
}

export default App;