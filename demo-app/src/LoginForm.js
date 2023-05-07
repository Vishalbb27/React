import * as React from "react";
// const init_state = {
//   email: "",
//   password: "",
// };
const LoginForm = ({ onLogin }) => {
  const emailRef = React.useRef();
  const passRef = React.useRef();
    // const [form, setForm] = React.useState({ init_state });
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(email,pass)
  };



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input id="pass" type="password" ref={passRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
