import React from 'react';

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
    console.log('isShown : ' + isShown);
  }

  const [messages, setMessages] = React.useState(['a', 'b', 'c']);

  return (
    <>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} Punchline
      </button>

      <div>
        {messages.length === 0 ? (
          <h1>You're all caught up!</h1>
        ) : (
          <h1>
            You have {messages.length} unread{' '}
            {messages.length > 1 ? 'messages' : 'message'} !
          </h1>
        )}
      </div>

      <hr />
    </>
  );
}
