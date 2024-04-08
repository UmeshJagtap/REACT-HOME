import React from 'react';
console.log('Check Render');
export default function Form() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  console.log(firstName);
  console.log(lastName);

  const handleFirstNameChange = (event) => {
    // console.log('Changed');
    // console.log(event);
    // console.log(event.target);
    setFirstName(event.target.value);
  };

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  return (
    <div>
      <form>
        <br />
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
        <br />
        <p>Check cosole for more info</p>
      </form>
    </div>
  );
}
