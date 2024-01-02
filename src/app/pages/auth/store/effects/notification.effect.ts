import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {NotifierService} from "angular-notifier";
import {signUpFailureAction, signUpSuccessAction} from "../actions/signUp.action";
import {tap} from "rxjs";
import {BackendErrorsInterface} from "../../../../shared/types/backendErrors.interface";
import {loginFailureAction, loginSuccessAction} from "../actions/login.action";

@Injectable()
export class NotificationEffect {
  constructor(
    private actions$: Actions,
    private notifier: NotifierService
  ) {}

  notifySignUpOnSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(signUpSuccessAction),
        tap(() => {
          this.notifier.notify('success', 'Вы успешно зарегистрировались!');
        })
      ),
    { dispatch: false}
  );

  notifySignUpOnFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUpFailureAction),
      tap((action: {errors: BackendErrorsInterface}) => {
        this.notifier.notify('error', action.errors.message);
      })
    ),
    { dispatch: false}
  );

  notifyLoginOnSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.notifier.notify('success', 'Вы успешно вошли!');
        })
      ),
    { dispatch: false}
  );

  notifyLoginOnFailure$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginFailureAction),
        tap((action: {errors: BackendErrorsInterface}) => {
          this.notifier.notify('error', action.errors.message);
        })
      ),
    { dispatch: false}
  );
}
