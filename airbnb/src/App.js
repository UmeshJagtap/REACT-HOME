import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import MainContent from './components/MainContent';
import Card from './components/Card';
import data from './data';
// console.log(data);

function App() {
  const cards = data.map((item) => {
    return (
      // <Card img={item.img} rating={item.reviewCount} reviewCount={6} />
      <Card
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        // item={item}
        {...item} // Using es6 spread syntax to pass props down to the components
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        {/* <MainContent /> */}
        <section className="cards-list">{cards}</section>
      </header>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=bMknfKXIFA8
