export interface ICredential {
  username: string;
  password: string;
}

export interface IRole {
  id?: string;
  role_name?: string;
}

export interface IAccess {
  id?: string;
  access_name?: string;
  parent?: IAccess;
  user_route?: string;
}
