import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, tap} from "rxjs";
import {AuthServices} from "../../services/auth.services";
import {PersistanceService} from "../../../../shared/services/persistance.service";
import {getCurrentUserAction, getCurrentUserFailureAction} from "../actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private action$: Actions,
    private authService: AuthServices,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.token;

        if (!token) {
          return of(getCurrentUserFailureAction())
        }

        return this.authService.getCurrentUser().pipe(
          tap((currentUser) => console.log('CurrentUser:', currentUser)),
          // map((currentUser: CurrentUserInterface) => {
          //   this.persistanceService.setToken(currentUser);
          //   return loginSuccessAction({ ...currentUser });
          // }),
          // catchError((errorResponse: HttpErrorResponse) =>
          //   of(loginFailureAction({ errors: errorResponse.error.error }))
          // )
        )
      })
    )
  );
}
