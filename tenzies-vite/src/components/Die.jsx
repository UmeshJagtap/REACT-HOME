import React from 'react';

export default function Die(props) {
  return (
    <>
      {/* <div className="die-face"> */}
      <div className={`die-face ${props.isHeld && "isHeld"}`}>
        <h2>{props.value}</h2>
      </div>
    </>
  );
}
