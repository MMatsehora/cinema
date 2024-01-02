import {createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/types/appState.interface";
import {AuthStateInterface} from "../types/authState.interface";

export const authSelector = (state: AppStateInterface): AuthStateInterface => state.auth

export const isSubmittingSelector = createSelector(
  authSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const isLoggedInSelector = createSelector(
  authSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
)

export const currentUserSelector = createSelector(
  authSelector,
  (authState: AuthStateInterface) => authState.currentUser
)
