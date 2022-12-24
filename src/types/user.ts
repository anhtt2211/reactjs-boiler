export interface PublicUser {
  username: string;
  bio: string | null;
  image: string | null;
}

export interface User extends PublicUser {
  email?: string;
  token?: string;
}

export interface UserSettings extends PublicUser {
  email: string;
}

export interface UserForRegistration {
  username: string;
  email: string;
  password: string;
}
