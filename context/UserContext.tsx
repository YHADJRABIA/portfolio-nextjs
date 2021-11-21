import { createContext, useContext, ReactNode, useState } from "react";

type userContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

type Props = {
  children: ReactNode;
};

const initialValues: userContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<userContextType>(initialValues);

export const useAuth = () => useContext(UserContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
