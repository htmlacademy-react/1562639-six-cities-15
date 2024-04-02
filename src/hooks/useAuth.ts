import { AuthorizationStatus } from '../constants/const';
import { userSelectors } from '../store/slices/user';
import { useAppSelector } from './store';

export function useAuth() {
  const status = useAppSelector(userSelectors.userStatus);

  return status === AuthorizationStatus.Auth;
}
