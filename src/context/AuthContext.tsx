import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiError, CustomApiError } from "../features/types";
import Loading from "../components/Loader";

export interface User {
  schoolId?: string;
  sub: string;
  admin: boolean;
  exp: number;
  iat: number;
}

interface AuthContext {
  user: User | null;
  isLoggedIn: boolean;
  setIsLoggedIn: any;
  logout: () => void;
}

// typescript stuff i love it
export interface MyProviderProps {
  children: React.ReactNode;
}

const logout = async () => {
  const response = await fetch("http://localhost:8080/api/logout", {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    const errorData: ApiError = await response.json();
    const err = new CustomApiError<ApiError>(
      "error while loggin out",
      errorData,
      response.status
    );
    throw err;
  }
  return await response.json()
};

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: MyProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/me", {
          credentials: "include",
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  if (isLoggedIn === null) {
    return <Loading message="Loading..."></Loading>;
  }

  return (
    <AuthContext.Provider value={{ logout, user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
