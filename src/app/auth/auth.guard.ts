import { AuthService } from './auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true

  // constructor(private authService: AuthService){};
};
