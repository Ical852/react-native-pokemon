export interface ReduxActionParams {
  payload: any;
  type: string;
}

export interface Response {
  status: number;
  message: string;
}

export interface FailedResponse {
  message: string;
}

export interface MyPokemon {
  id: number;
  url: string;
  nickname: string;
  fibonacciIndex: string;
  createdAt: string;
  updatedAt: string;
}
