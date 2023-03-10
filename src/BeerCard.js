import React from 'react';


function BeerCard(props) {
const { name, brewed, tagline, abv, description, image, alt, onClick, text, id, liked } = props;

   return (
   <li style={{ listStyle: "none"}}>
    <img style={{ height: "150px"}}src={image} alt={alt}></img>   
       <h3>{name} <span> {brewed} </span></h3> 
       <h4>{tagline}</h4> 
    <p><span>{abv} ABV.</span> {description}</p>
    <button onClick={onClick} liked={liked.toString()}id={id}>{text}</button>
    </li>
   )
}

export default BeerCard;