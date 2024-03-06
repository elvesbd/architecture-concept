"use client";

import { UserResponseDTO } from "adapters";
import { createContext } from "react";

type AuthProviderProps = {
  readonly children: React.ReactNode;
};

type AuthContextProps = {
  user: UserResponseDTO | null;
};

const AuthContext = createContext<AuthContextProps>({} as any);

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
