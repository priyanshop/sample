import React from 'react';
import { token } from '../hooks/useToken';
import TokenContext from './TokenContext';

interface TokenWrapperProps {
  children: React.ReactNode;
}

export const TokenWrapper: React.FC<TokenWrapperProps> = ({ children }) => {
  return (
    <TokenContext.Provider
      value={{
        get: token.get,
        set: token.set,
        remove: token.remove,
        validate: token.validate,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
