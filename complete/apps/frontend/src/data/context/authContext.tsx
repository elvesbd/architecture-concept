type AuthProviderProps = {
  readonly children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <div>
      <h1>Provedor</h1>
      {children}
    </div>
  );
}
