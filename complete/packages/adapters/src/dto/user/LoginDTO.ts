import { UserProps } from "core";

export interface LoginDTO extends Omit<UserProps, "name"> {}
