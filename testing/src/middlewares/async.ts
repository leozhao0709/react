import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

export const async: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (!action.payload || !(action.payload instanceof Promise)) {
    return next(action);
  }

  action.payload.then((res: any) => {
    const newAction = { ...action, payload: res };
    store.dispatch(newAction);
  });
};
