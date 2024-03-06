"use client";

import { createContext, useState, useMemo } from "react";
import useApi from "../hooks/useApi";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { LoginDTO, UserResponseDTO } from "adapters";

type AuthProviderProps = {
  readonly children: React.ReactNode;
};

type AuthContextProps = {
  user: UserResponseDTO | null;
  login(user: LoginDTO): Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({} as any);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserResponseDTO | null>(null);
  const { httpPost } = useApi();

  const login = async (dto: LoginDTO) => {
    try {
      const { data: token } = await httpPost<LoginDTO, string>("login", dto);
      const { id, name, email } = jwtDecode<UserResponseDTO>(token);
      setUser({ id, name, email });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const contextValue = useMemo(
    () => ({
      user,
      login,
    }),
    [user, login]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
