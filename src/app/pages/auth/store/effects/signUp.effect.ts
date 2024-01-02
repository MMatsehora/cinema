import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {signUpAction, signUpFailureAction, signUpSuccessAction} from "../actions/signUp.action";
import {catchError, mergeMap, of, switchMap, tap} from "rxjs";
import {AuthServices} from "../../services/auth.services";
import {map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {userService} from "../../../../shared/services/user.service";
import {CurrentUserInterface} from "../../../../shared/types/currentUser.interface";

@Injectable()
export class SignUpEffect {
  constructor(
    private action$: Actions,
    private authService: AuthServices,
    private persistanceService: PersistanceService,
    private userService: userService,
    private router: Router
  ) {}

  signUp$ = createEffect(() =>
    this.action$.pipe(
      ofType(signUpAction),
      switchMap(({ ...props }) =>
        this.authService.signUp(props).pipe(
          tap((currentUser: CurrentUserInterface) => this.persistanceService.setToken(currentUser)),
          mergeMap((currentUser: CurrentUserInterface) =>
            this.userService.createUserInRealtimeDatabase(currentUser.localId, { ...props }).pipe(
              map(() => {
                return signUpSuccessAction({ ...currentUser });
              })
            )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(signUpFailureAction({ errors: errorResponse.error.error }))
          )
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(() => this.action$.pipe(
    ofType(signUpSuccessAction),
    tap(() => {
      this.router.navigate(['/dashboard']);
    })
  ), {dispatch: false})
}
