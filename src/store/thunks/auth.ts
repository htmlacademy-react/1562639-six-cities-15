import { EndPoint } from '../../constants/const';
import { createAppAsyncThunk } from '../../hooks/store';
import { dropToken, saveToken } from '../../services/token';
import { User } from '../../types/review';

const checkAuth = createAppAsyncThunk<User, undefined>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<User>(EndPoint.Login);
    return response.data;
  }
);

interface LoginData {
  email: string;
  password: string;
}

const login = createAppAsyncThunk<User, LoginData>(
  'auth/login',
  async (body, { extra: api }) => {
    const response = await api.post<User>(EndPoint.Login, body);
    saveToken(response.data.token);
    return response.data;
  }
);

const logout = createAppAsyncThunk<unknown, undefined>(
  'auth/logout',
  async (_, { extra: api }) => {
    await api.delete(EndPoint.Logout);
    dropToken();
  }
);

export { checkAuth, login, logout };
