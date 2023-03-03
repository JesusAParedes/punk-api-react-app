import { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import BeerCard from './BeerCard';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      beerArray : [],
    };
  }

 

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => { 
      const { data } = res;
      const beerArray = data;
      this.setState({beerArray})
      console.log('beerArray', beerArray);
    })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ol>{this.state.beerArray.map((beer, index) => {
              return <BeerCard 
              key={index} 
              name={beer.name}
              brewed={beer.first_brewed} 
              tagline={beer.tagline}
              abv={beer.abv}
              description={beer.description}
              image={beer.image_url}/>
              
            })}</ol>
            
          </header>
        </div>
      );
  }
}

export default App;
