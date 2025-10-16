import "./../styles/App.css";
import React, { createContext, useState } from "react";
import Auth from "./Auth";

export const AuthContext = createContext();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

