/* eslint-disable import/no-anonymous-default-export */
export interface comment{
    userName: string | undefined;
    commentText: string | undefined;
}

type State = {
    comments: comment[],
    commentId: number
}

const initialState: State={
    comments: [],
    commentId: -1
}


export default {
    state: initialState,

    reducers:{
        updateState(state:State, payload: Partial<State>){
            return{
                ...state,
                ...payload
            };
        }
    }
};

