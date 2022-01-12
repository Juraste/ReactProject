import { comment } from '.';
import type { Dispatch, RootState } from '../store';

export interface comment {
  userName: string | undefined;
  commentText: string | undefined;
  createdTime: number;
  durationTime: number;
}

type State = {
  comments: comment[];
  commentId: number;
};

const initialState: State = {
  comments: [],
  commentId: -1
};

export default {
  state: initialState,

  reducers: {
    updateState(state: State, payload: Partial<State>) {
      return {
        ...state,
        ...payload
      };
    }
  },

  effect: (dispatch: Dispatch) => ({
    async updateTimeString(comment: comment) {
      const duration = (Date.now() - comment.createdTime) / 1000;
      let durationString;
      if (duration > 60 && duration < 3600) {
        durationString = duration / 60 + '分钟前';
      }
    }
  })
};
