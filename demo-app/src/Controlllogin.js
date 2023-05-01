import * as React from "react";
const init_state = {
  email: "",
  password: "",
};
const Controlllogin = () => {
  const [form, setForm] = React.useState(init_state);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Controlllogin;
