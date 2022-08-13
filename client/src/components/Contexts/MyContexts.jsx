import axios from 'axios';
import React, {
  createContext, useState, useContext, useEffect,
} from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ });
  useEffect(() => {
    axios.post('/api/user/check')
      .then((res) => setUser(res.data))
      .catch(console.log);
  }, []);
  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

export default UserContextProvider;
