import { createContext } from 'react';

export const AuthContext = createContext({ authStatus: false, login: () => {} });
