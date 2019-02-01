import React, { Component } from 'react';
import News from './components/News.js'
import Search from './components/Search.js'
import './App.css'

import { Container, Jumbotron } from 'reactstrap';

class App extends Component {

  state = {
    news: [],
    searchTerm: ''
  }

  handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
  }
  
  handleClick = () => {
    console.log("Search Term: " + this.state.searchTerm);
    const searchType = "everything"
    const apiKey = "06e1e988dbc84cdbb021c61f1b1a2266";
    const apiUrl = "https://newsapi.org/v2/" + searchType + "?q=" + this.state.searchTerm + "&apiKey=" + apiKey;
    console.log("url: " + apiUrl);
		fetch(apiUrl)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
        console.log("Data -> ");
        console.log(data.articles);
				this.setState({
					news: data.articles
				})
			})
			.catch((error) => console.log(error));
	}

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 style={{textAlign: "center"}}>News Aggregator App</h1>
          <br/>
          <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} handleClick={this.handleClick}/>
        </Jumbotron>
        <Container fluid={false}>
          <News news={this.state.news} />
        </Container>
      </div>
    );
  }
}

export default App;
