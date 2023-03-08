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
      isLiked: true,
      buttonText: 'Like this beer?'
    };
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => { 
      const { data } = res;
      const beerArray = data;
      
      this.setState({ beerArray : beerArray.map(beer => 
        ({...beer,
        isLiked: false,
        buttonText: 'Like this beer?'
      })
      )
    })
    })
    
  }
  
  handleClick(e, index) {
    //looks through the beers to find the one the user clicks (.find works more efficient in this case)
    const clickBeer = this.state.beerArray.find((b, idx) => {
      if(idx === index) {
        return b
      }})
      //adds the beer to the liked beers array
      this.setState({
        likedBeers: [...this.state.likedBeers, clickBeer],
        isLiked: !this.state.isLiked,
        buttonText: !this.state.isLiked ? 'Like this beer?' : 'Liked'
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
              image={beer.image_url}
              alt={beer.name}
              onClick = {(e) => {this.handleClick(e, index)}}
              text={this.state.buttonText}
              liked={beer.isLiked}
              id={beer.id}
              />
            })}</ol>
            
          </header>
        </div>
      );
  }
}

export default App;
