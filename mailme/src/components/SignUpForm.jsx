import React from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confPassword: '',
    joinNewsletter: true,
  });

  // function handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   console.log(name + ': ' + value);
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    // console.log(name + ': ' + value);
    // setFormData((prevFormData) => {
    //   return {
    //     ...prevFormData,
    //     [name]: type === 'checkbox' ? checked : value,
    //   };
    // });
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.password === formData.confPassword) {
      // && ((formData.password!='') && (formData.confPassword != ''))
      console.log('Successfully signed up');
    } else {
      console.log('Passwords do not Match');
      return;
    }

    if (formData.joinNewsletter) {
      console.log('Thanks for signing up our newsletter:');
    }
  }

  return (
    <>
      <div className="signUpFormBody">
        <form onSubmit={handleSubmit} className="signUpForm">
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="confirm password"
            value={formData.confPassword}
            name="confPassword"
            onChange={handleChange}
          />
          <div className="checkbox">
            <input
              type="checkbox"
              id="okayToEmail"
              name="joinNewsletter"
              onChange={handleChange}
              checked={formData.checked} //joinedNewsletters
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>

          <button type="submit" className="signUpButton">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
