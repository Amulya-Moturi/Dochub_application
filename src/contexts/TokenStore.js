import { useState } from "react"
import {TokenContext} from './TokenContext'
function TokenStore({children}) {
    const [token, setToken] = useState(null);
  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };
  return (
    <TokenContext.Provider value={[token, login, logout]}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenStore