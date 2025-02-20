import { createContext, ReactNode, useState } from "react";
import { allUsers, ILoggedInUser } from "../untils/UserUntil";

//interface
interface IUserContext {
  currentUser: ILoggedInUser | undefined;
  add: (addpoint: number, Userid: number) => void;
  login: (
    id: number,
    username: string,
    password: string,
  ) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

//def
const defaultUserContext = {
  currentUser: undefined,
  add: (addpoint: number, id: number) => {},
  login: (Userid: number, username: string, password: string) => {},
  logout: () => {},
  isLoggedIn: false,
};

//Context
export const UserContext = createContext<IUserContext>(defaultUserContext);

//Context Provider

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<ILoggedInUser | undefined>(
    undefined
  );

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function login(Userid: number, username: string, password: string) {
    const isSearch = allUsers.find((u) => {
      return u.username === username && u.password === password;
    });
    if (isSearch) {
      setCurrentUser({
        username: isSearch.username,
        userId: Userid,
      });
      setIsLoggedIn(true);
    }
  }

  function logout() {
    setCurrentUser(undefined);
    setIsLoggedIn(false);
  }

  function add(addpoint: number, userid: number | undefined) {
    addpoint + 1;
    userid = currentUser?.userId;
  }

  return (
    <UserContext.Provider
      value={{ currentUser, login, add, logout, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
