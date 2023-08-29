import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js'

export default function App(){
  const cardArray = data.map(item =>{
    return(
      <Card 
      key={item.id}
      {...item}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // country={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      />
    )
  })

  return(
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">{cardArray}</section>
    </div>
  )
}