import React from 'react';


function BeerCard(props) {
const { name, brewed, tagline, abv, description, image} = props;
   return (
   <li style={{ listStyle: "none"}}>
    <img style={{ height: "150px"}}src={image}></img>   
       <h3>{name} <span> {brewed} </span></h3> 
       <h4>{tagline}</h4> 
    <p><span>{abv} ABV.</span> {description}</p>
    <button>What does this say</button>
    </li>
   )
}

export default BeerCard;