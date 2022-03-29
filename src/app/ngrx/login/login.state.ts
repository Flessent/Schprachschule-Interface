import { Users } from '../../model/user';
import { Personne } from '../../model/personne';
export interface LoginState {
  user: Users | null;
  personne : Personne|null;
}

export const initialState: LoginState = {
  user: null,
  personne : null
};
