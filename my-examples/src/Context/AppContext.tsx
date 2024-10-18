import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface MyComponentProps {
  children: ReactNode;
}

interface AppContextType {
  userData: User | null;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: MyComponentProps) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ userData }}>{children}</AppContext.Provider>
  );
};
