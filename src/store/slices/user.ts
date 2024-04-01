import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../constants/const';
import { User } from '../../types/review';
import { checkAuth, login, logout } from '../thunks/auth';

interface UserState {
  info: User | null;
  requestStatus: RequestStatus;
  status: AuthorizationStatus;
}

const initialState: UserState = {
  info: null,
  requestStatus: RequestStatus.Idle,
  status: AuthorizationStatus.Unknown,
};

function processSuccess(state: UserState, action: PayloadAction<User>) {
  state.info = action.payload;
  state.status = AuthorizationStatus.Auth;
  state.requestStatus = RequestStatus.Success;
}

function processFailed(state: UserState) {
  state.requestStatus = RequestStatus.Failed;
  state.status = AuthorizationStatus.NoAuth;
}

function processLoading(state: UserState) {
  state.requestStatus = RequestStatus.Loading;
}

export const userSlice = createSlice({
  extraReducers(builder) {
    builder.addCase(checkAuth.fulfilled, processSuccess);
    builder.addCase(checkAuth.rejected, processFailed);
    builder.addCase(checkAuth.pending, processLoading);
    builder.addCase(login.fulfilled, processSuccess);
    builder.addCase(login.rejected, processFailed);
    builder.addCase(login.pending, processLoading);
    builder.addCase(logout.fulfilled, (state) => {
      state.info = null;
      state.status = AuthorizationStatus.NoAuth;
    });
  },
  initialState,
  name: 'user',
  reducers: {
    setAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.status = action.payload;
    }
  },
  selectors: {
    userStatus: (state) => state.status,
    info: (state) => state.info
  }
});

export const userActions = {...userSlice.actions, checkAuth, login, logout};
export const userSelectors = userSlice.selectors;
