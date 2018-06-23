// @flow

export type FormState = {};

export type ReduxState = {
  +form: FormState,
  +snackbar: SnackbarState,
};

export type Action = {
  +type: string,
  +payload: { [s: string]: any },
  +meta: { [s: string]: any },
};

export type GetState = () => ReduxState;
export type PromiseAction = Promise<Action>;
export type Dispatch = (
  action:
    | Action
    | ((
        dispatch: Dispatch,
        getState: GetState
      ) => any | PromiseAction | Array<Action>)
) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
