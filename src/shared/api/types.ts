export interface CustomError {
  code?: string;
  message?: string;
  status: number;
}

export interface Params {
  [key: string]: string | number | boolean | Array<string | number | boolean>;
}

export interface ThunkAxiosParams<T extends Params = any> {
  path: string;
  params?: T;
  headers?: { [key: string]: string };
  method?: 'get' | 'post' | 'put' | 'patch';
  abortWithParams?: boolean;
  rejectWithValue: (value: CustomError) => void;
}
