import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ avatar_url, login, html_url }) => {
  // const { avatar_url, login, html_url } = this.state;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: "60px" }}
        alt=''
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default UserItem;
