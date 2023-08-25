import React, { createContext, useContext } from "react";

type User = {
  name: string;
  username: string;
  email: string;
  isLoggedIn?: boolean;
};

const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
} | null>(null);

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within UserContext.Provider");
  }
  return { ...context };
};


// const UserProvider:

// export {};
