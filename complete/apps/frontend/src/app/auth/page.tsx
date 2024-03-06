"use client";
import useAuthContext from "@/data/hooks/useAuthContext";
import useForm from "@/data/hooks/useForm";
import { Button, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const { user, mode, changedMode, onChangeValue } = useForm();
  const { login, user: userAuthenticated } = useAuthContext();

  if (userAuthenticated) {
    router.push("/");
    return null;
  }

  const handleLogin = () => {
    login({
      email: user.email,
      password: user.password,
    });
  };

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
          <Button onClick={handleLogin}>Login</Button>
          <Button variant="subtle" onClick={changedMode}>
            Registre-se
          </Button>
        </div>
      </div>
    </div>
  );
}
