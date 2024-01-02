import {createAction} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)


