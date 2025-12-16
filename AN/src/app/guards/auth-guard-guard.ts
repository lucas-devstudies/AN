import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../core/services/token-service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.getToken();

  if(!token){
    return router.parseUrl('/login');
  }

  if(!tokenService.isTokenValid()){
    tokenService.logout();
    return router.parseUrl('/login');
  }
  return true;
};
