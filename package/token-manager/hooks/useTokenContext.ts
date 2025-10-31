import { useContext } from 'react';
import TokenContext from '../provider/TokenContext';

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useTokenContext must be used within a TokenProvider');
  }
  return context;
};
