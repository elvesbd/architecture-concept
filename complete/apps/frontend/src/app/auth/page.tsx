"use client";
import useAuthForm from "@/data/hooks/useAuthForm";
import { Button, TextInput } from "@mantine/core";

export default function AuthPage() {
  const { user, mode, changedMode, onChangeValue } = useAuthForm();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-black self-center">
        {mode === "login" ? "Informe suas credenciais" : "Cadastre-se"}
      </h1>
      <div className="flex flex-col w-96 gap-1">
        {mode === "register" && (
          <TextInput
            label="Nome"
            value={user?.name}
            onChange={onChangeValue("name")}
          />
        )}
        <TextInput
          label="E-mail"
          value={user?.email}
          onChange={onChangeValue("email")}
        />
        <TextInput
          label="Senha"
          type="password"
          value={user?.password}
          onChange={onChangeValue("password")}
        />

        <div className="flex flex-col gap-3 mt-5">
          <Button>Login</Button>
          <Button variant="subtle" onClick={changedMode}>
            Registre-se
          </Button>
        </div>
      </div>
    </div>
  );
}
