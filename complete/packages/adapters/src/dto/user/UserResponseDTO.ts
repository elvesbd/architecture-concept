import { UserProps } from "core";

export interface UserResponseDTO extends Omit<UserProps, "password"> {
  acronym?: string;
}
