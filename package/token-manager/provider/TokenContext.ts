import React from 'react';

export interface TokenContextType {
  get: () => Promise<string | null>;
  set: (token: string) => Promise<void>;
  remove: () => Promise<void>;
  validate: () => Promise<boolean>;
}

const TokenContext = React.createContext<TokenContextType>({
  get: async () => null,
  set: async () => {},
  remove: async () => {},
  validate: async () => false,
});

export default TokenContext;
