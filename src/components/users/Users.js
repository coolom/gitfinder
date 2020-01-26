import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const gitHubContext = useContext(GithubContext);

  const { users, loading } = gitHubContext;

  return loading ? (
    <Spinner />
  ) : (
    <div style={UserStyle}>
      {users.map(user => (
        <UserItem
          key={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
          html_url={user.html_url}></UserItem>
      ))}
    </div>
  );
};

const UserStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
