import { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import BeerCard from './BeerCard';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beerArray : [],
      likedBeers: [],
      isLiked: false,
      text: 'Like this beer?'
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

  handleClick(e, index) {
    //looks through the beers to find the one the user clicks
    const clickBeer = this.state.beerArray.filter((b, idx) => {
      if(idx === index) {
        return b
      }})
      
      const liked = this.state.isLiked === false ? true : false

    //adds the beer to the liked beers array
    this.setState({
      likedBeers: [...this.state.likedBeers, clickBeer],
      isLiked: liked})
    
      
    if(!liked) {
      this.state.text = 'Liked'
    } else {this.state.text = 'Like this beer?'}
    console.log(this.state.text)
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
              image={beer.image_url}
              alt={beer.name}
              onClick = {(e) => {this.handleClick(index)}}
              value={this.state.text}
              />
            })}</ol>
            
          </header>
        </div>
      );
  }
}

export default App;
