import React from 'react';

export default function Die(props) {
  console.log(props.isHeld)
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    <>
      <div className="die-face" style={styles}>
      {/* <div className={`die-face ${props.isHeld && "isHeld"}`}> */}
        <h2 className='die-num'>{props.value}</h2>
      </div>
    </>
  );
}
