declare type RootState = ReturnType<
  typeof import('../../shared/lib/store/redux/store').store.getState
>;
declare type AppDispatch =
  typeof import('../../shared/lib/store/redux/store').store.dispatch;
