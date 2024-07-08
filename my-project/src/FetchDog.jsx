import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  const [dogData, setDogData] = React.useState({});
  const handleClick = () => {
    getDogPic();
  };
  const getDogPic = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    console.log(dog);
    console.log(dog.status);
    console.log(dog.message);
    setDogData(dog);
    // setDogData((prevData) => ({
    //   ...prevData,
    //   [dog]
    // }) );
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>FETCH DOG</button>
        {/* {dogData.map((e) => {
          <img src={e.message} alt="dog pic" />;
        })} */}
      </div>
    </>
  );
}
