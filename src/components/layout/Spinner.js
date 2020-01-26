import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <div className='text-center'>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: "200px", margin: "auto" }}
    />
  </div>
);

export default Spinner;
