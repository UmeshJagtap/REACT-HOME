// import React from 'react';

// export default function Box(props) {
//   console.log(props);

//   const showBox = props.data ? (
//     <div className="Box">
//       <p>{props.key}</p>
//     </div>
//   ) : (
//     <div className="emptyBox">
//       <p>{props.key}</p>
//     </div>
//   );

//   return (
//     <section className=".showBox--container" onClick={props.handleClick}>
//       {showBox}
//     </section>
//   );
// }

import React from 'react';

export default function Box(props) {
  // const showbox = props.showBox;
  // console.log(showbox);
  // const [showBox, setShowBox] = React.useState(showbox);

  // function handleClick() {
  //   // setShowBox((prevState) => ({
  //   //   ...prevState,
  //   //   showbox: !prevState.showbox,
  //   // }));
  //   setShowBox((prevOn) => !prevOn);
  // }

  // console.log(props.id);

  const styles = {
    backgroundColor: props.showBox ? '#222222' : 'transparent',
  };

  return (
    <button
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
      onfocus="this.blur();"
    />
  );
}
