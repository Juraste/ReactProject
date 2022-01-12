import type { Dispatch, RootState } from '../store';

export enum FilterType {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE'
}

export interface Task {
  content: string;
  complete: boolean;
}

type State = {
  tasks: Task[];
  filter: FilterType;
};

const initialState: State = {
  tasks: [],
  filter: FilterType.ALL
};

export default {
  state: initialState,

  reducers: {
    updateState(state: State, playload: Partial<State>) {
      return {
        ...state,
        ...playload
      };
    }
  }
};
