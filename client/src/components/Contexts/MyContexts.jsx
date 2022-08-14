import React, {
  createContext, useState, useContext, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { userCheck } from '../../Redux/actions/userActions';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCheck());
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
