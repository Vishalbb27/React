import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import { useLocation } from "react-router-dom";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading } = githubContext;
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const data = params.get("data");
  useEffect(() => {
    console.log(location);

    getUser(data);
    // getRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <Fragment>
      <div>Name : {name}</div>
      <Link to="/">Back to Search</Link>
      Hirable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {followers}</div>
        <div className="badge badge-success">Following : {following}</div>
        <div className="badge badge-light">Public Repos : {public_repos}</div>
        <div className="badge badge-dark">Public Gists : {public_gists}</div>
      </div>
    </Fragment>
  );
};

export default User;
