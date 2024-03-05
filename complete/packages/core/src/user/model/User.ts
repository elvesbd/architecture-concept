import Email from "../../shared/value-objects/Email";
import UserName from "../../shared/value-objects/UserName";
import PasswordHash from "../../shared/value-objects/PasswordHash";
import Entity, { EntityProps } from "../../shared/value-objects/Entity";

export interface UserProps extends EntityProps {
  name: string;
  email: string;
  password: string;
}

export default class User extends Entity<User> {
  readonly name: UserName;
  readonly email: Email;
  readonly password?: PasswordHash | null;

  constructor(props: UserProps) {
    super(props);
    this.name = new UserName(props.name);
    this.email = new Email(props.email);
    this.password = props.password ? new PasswordHash(props.password) : null;
  }

  withOutPassword(): User {
    const res = this.clone({ password: null });
    return res;
  }
}
