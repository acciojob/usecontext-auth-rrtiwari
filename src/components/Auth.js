import React, { useContext } from "react";
import { AuthContext } from "./App";

export default function Auth() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />
        I am not a robot
      </label>
      <p className="authText">{isAuthenticated ? "You are now authenticated, you can proceed" : "you are not authenticated"}</p>
    </div>
  );
}
