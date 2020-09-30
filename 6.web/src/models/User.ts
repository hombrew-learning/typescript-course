import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  public static create(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }

  static createCollection(): Collection<UserProps> {
    return new Collection<UserProps>(new ApiSync(rootUrl), (json: UserProps) =>
      User.create(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
