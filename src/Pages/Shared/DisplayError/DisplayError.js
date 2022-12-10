import React from "react";
import { useContext } from "react";
import { useRouteError } from "react-router-dom";

import { AuthContext } from "../../../contexts/Authentication/Authentication";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <p className="text-red-600">Something went wrong!</p>
      <p className="text-red-600">{error.statusText || error.message}</p>
      <h4 className="text-2xl">
        Please
        <button className="btn btn-primary" onClick={handleLogOut}>
          Sign Out
        </button>
        and log back in.
      </h4>
    </div>
  );
};

export default DisplayError;
