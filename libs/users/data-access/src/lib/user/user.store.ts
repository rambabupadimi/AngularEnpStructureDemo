import { User } from '@demo-app/shared/data-access/models';

export interface UserState {
  isLoading: boolean;
  users?: User[];
  error: string | null;
  addEditDialog: boolean;
  deleteDialog: boolean;
}

export const initState: UserState = {
  isLoading: false,
  error: null,
  users: [],
  addEditDialog: false,
  deleteDialog: false,
};
