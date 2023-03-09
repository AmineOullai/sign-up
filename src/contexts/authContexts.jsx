import { createContext, useCallback, useEffect, useState } from "react";

const saveUserFromLocalStorage = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};
const readUserFromLocalStorage = () => {
  const usr = JSON.parse(window.localStorage.getItem("user"));
  return usr || null;
};
export const AuthContext = createContext({
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(readUserFromLocalStorage());
  }, []);
  const login = useCallback((email, password) => {
    const usr = {
      email,
      password,
      name: "ALI",
      lastName: "OULLAI",
    };
    setUser(usr);
    saveUserFromLocalStorage(usr);
  }, []);
  const signup = useCallback((name, lastName, email, password) => {
    const usr = {
      email,
      password,
      name,
      lastName,
    };
    setUser(usr);
    saveUserFromLocalStorage(usr);
  }, []);

  const logout = useCallback(() => {
    saveUserFromLocalStorage(undefined);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const AuthConsumer = AuthContext.Consumer;
