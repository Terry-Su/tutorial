export type Thenable<T, R> = {
  then(resolve: (T) => any, reject: (any) => any): R,
};

export type LazyComponent<T> = {
  $$typeof: Symbol | number,
  _ctor: () => Thenable<{default: T}, any>,
  _status: 0 | 1 | 2,
  _result: any,
};