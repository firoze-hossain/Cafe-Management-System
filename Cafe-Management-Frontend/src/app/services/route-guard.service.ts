import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {SnackbarService} from "./snackbar.service";

import {GlobalConstants} from "../shared/global-constants";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router: Router,
              private authService: AuthService,
              private snackbarService: SnackbarService) {
  }

  canActivate(router:ActivatedRouteSnapshot):boolean {
    let expectedRoleArray = router.data;
    expectedRoleArray = expectedRoleArray.expectedRole;

    const token:any = localStorage.getItem('token'); // retrieve token from local storage
    var tokenPayload:any;

    try {
      tokenPayload = jwt_decode(token); // parse the token using jwt_decode
    } catch(err) {
      localStorage.clear();
      this.router.navigate(['/']);
    }

    let expectedRole = '';

    // extract the role from the token
    for (let i = 0; i < expectedRoleArray.length; i++) {
      if (expectedRoleArray[i] == tokenPayload.role) {
        expectedRole = tokenPayload.role;
      }
    }

    // if the token's role is allowed to access the feature --> return true
    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
      if (this.authService.isAuthenticated() && tokenPayload.role == expectedRole) {
        return true;
      }
      this.snackbarService.openSnackBar(GlobalConstants.unauthorized, GlobalConstants.error);
      this.router.navigate(['/cafe/dashboard']);
      return false;
    }
    else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}
