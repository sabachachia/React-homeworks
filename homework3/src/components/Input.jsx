import { useState } from "react";

function Input({ onSubmit }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const isCredentialsCorrect =
    user.email === "digitalAcademy@gmail.com" &&
    user.password === "iLoveReact123";

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="inputs_container" onSubmit={submitHandler}>
      <label>Email</label>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button type="submit" disabled={!isCredentialsCorrect}>
        Submit
      </button>
    </form>
  );
}

export default Input;