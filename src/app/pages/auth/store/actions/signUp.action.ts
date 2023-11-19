import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";

export const signUpAction = createAction(
  ActionTypes.REGISTER,
  props<{
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    password: string
  }>()
)
