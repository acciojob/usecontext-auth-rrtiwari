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
      <p>{isAuthenticated ? "User authenticated" : "User not authenticated"}</p>
    </div>
  );
}
