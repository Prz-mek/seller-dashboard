import React, { useState } from "react";

export function AuthProvider({ children }) {
  let [user, setUser] = useState();
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  let authenticate = (login) => {
    setUser(login);
    setIsAuthenticated(true);
  };

  let signout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, authenticate, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const AuthContext = React.createContext();
