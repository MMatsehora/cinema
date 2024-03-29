import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {SignUpRequestInterface} from "../../types/signUpRequest.interface";
import {CurrentUserInterface} from "../../../../shared/types/currentUser.interface";
import {BackendErrorsInterface} from "../../../../shared/types/backendErrors.interface";

export const signUpAction = createAction(
  ActionTypes.REGISTER,
  props<SignUpRequestInterface>()
)

export const signUpSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<CurrentUserInterface>()
)

export const signUpFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
