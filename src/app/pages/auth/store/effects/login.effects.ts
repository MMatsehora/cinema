import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, tap} from "rxjs";
import {AuthServices} from "../../services/auth.services";
import {map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {CurrentUserInterface} from "../../../../shared/types/currentUser.interface";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/login.action";

@Injectable()
export class LoginEffect {
  constructor(
    private action$: Actions,
    private authService: AuthServices,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginAction),
      switchMap(({ ...props }) =>
        this.authService.login(props).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.setToken(currentUser);
            return loginSuccessAction({ ...currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({ errors: errorResponse.error.error }))
          )
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(() => this.action$.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      this.router.navigate(['/dashboard']);
    })
  ), {dispatch: false})
}
