import React, { useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading } = githubContext;

  useEffect(() => {
    githubContext.getUser(match.params.login);
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
    following
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>

      <div>
        <p>Name: {name}</p>
        <p>avatar: {avatar_url}</p>
        <p>location: {location}</p>
        <p>bio: {bio}</p>
        <p>blog: {blog}</p>
        <p>url: {html_url}</p>
        <p>followers: {followers}</p>
        <p>following: {following}</p>
      </div>
    </Fragment>
  );
};

export default User;
