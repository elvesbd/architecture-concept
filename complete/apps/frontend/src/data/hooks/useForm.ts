"use client";
import React, { useState } from "react";
import { RegisterDTO } from "adapters";

type UserField = "name" | "email" | "password";
type Mode = "login" | "register";

export default function useForm() {
  const [user, setUser] = useState<RegisterDTO>({
    name: "",
    email: "",
    password: "",
  });
  const [mode, setMode] = useState<Mode>("login");

  const onChangeValue = (atr: UserField) => {
    return (value: string | React.ChangeEvent<HTMLInputElement>) => {
      setUser((prevUser: RegisterDTO) => ({
        ...prevUser,
        [atr]: typeof value === "string" ? value : value.target.value,
      }));
    };
  };

  return {
    user,
    mode,
    setUser,
    onChangeValue,
    changedMode: () => setMode(mode === "login" ? "register" : "login"),
  };
}
