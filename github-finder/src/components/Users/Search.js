import PropTypes from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/Alert/alertContext";

const Search = ( ) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { showalert } = alertContext;

  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value); //this line can be used to set the state of multiple inputs
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter a search term", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {

  showalert: PropTypes.func.isRequired,
};
export default Search;
