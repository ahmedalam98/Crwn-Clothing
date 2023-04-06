import { useState } from "react";

// to generalize the handleChange for inputs
const defaultFormFields = {
  displayName: "",
  email: "",
  passowrd: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // destructuring input fields to apply functionality for them
  const { displayName, email, passowrd, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    // spread the object of saved values, and only change one element of them one by one
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="passowrd"
          value={passowrd}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default SignUp;
