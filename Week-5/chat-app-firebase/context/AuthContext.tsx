import { FIREBASE_AUTH } from "@/config/FirebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import React, {
  Children,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface AuthContextProps {
  user?: User | null;
  initialized?: boolean;
}

export const AuthContext = createContext<AuthContextProps>({});

export function useAuth() {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setInitialized(true);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    initialized,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
