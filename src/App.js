import React, { Component } from "react";
import './App.css'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from './components/Header'

class App extends Component {
	render() {
		return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
		);
	}
}

export default App;