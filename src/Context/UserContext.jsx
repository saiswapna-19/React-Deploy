import React, { createContext, useState } from "react";

 export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "swapna",
    email: "swapna@gmail.com",
    mobile: "9999999999",
    city: "Hyderabad",
    membership: "Gold membership"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}