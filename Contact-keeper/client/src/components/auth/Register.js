import React from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = React.useContext(AlertContext);
  const authContext = React.useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
   
  React.useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/";
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger", 3000);
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger", 3000);
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
