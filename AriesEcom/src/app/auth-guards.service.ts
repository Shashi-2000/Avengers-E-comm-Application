import { CanActivate } from '@angular/router'

export class AuthGuardService implements CanActivate {
    canActivate() : boolean {
        if(sessionStorage.getItem('isUserValid') === 'true'){
            // sessionStorage.clear();
            return true;
        }else {
            sessionStorage.clear();
            return false;
        }
    }
}