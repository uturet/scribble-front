import React, {createContext, useState, useCallback, useEffect} from "react";
import axios from 'axios'

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  const checkLoginState = useCallback(async () => {
    try {
      const { data: { loggedIn: logged_in, user }} = await axios.get(`http://localhost:8000/user`);
      setLoggedIn(logged_in);
      user && setUser(user);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider
