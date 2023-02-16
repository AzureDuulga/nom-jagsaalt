import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
