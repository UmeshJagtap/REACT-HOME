import React, { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  //   const data = {
  //     message:
  //       'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6564.jpg',
  //     status: 'success',
  //   };

  const [dogData, setDogData] = React.useState({
    message:
      'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6564.jpg',
    status: 'success',
  });
  const handleClick = () => {
    getDogPic();
  };
  const getDogPic = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    // console.log(dog);
    // console.log(dog.status);
    // console.log(dog.message);
    // setDogData(dog);
    setDogData((prevData) => ({
      ...prevData,
      message: dog.message,
      status: dog.status,
    }));
    console.log(dogData);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>FETCH DOG</button>
        <img
          src={dogData.message}
          alt="dog pic"
          style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          //   className="flex justify-center items-center"
        />
        <p>{dogData.status === 'success' && 'Fetch Success'}</p>
      </div>
    </>
  );
}
