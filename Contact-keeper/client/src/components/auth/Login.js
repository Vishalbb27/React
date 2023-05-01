import React from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const alertContext = React.useContext(AlertContext);
  const authContext = React.useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  React.useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/";
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger"); 
    } else {
      login({
        email,
        password,
      });
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
