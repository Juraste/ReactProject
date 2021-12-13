
type State = {
    userName: string | null;
    commentText: string | null;
}

const initialState: State={
    userName: null,
    commentText: null
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

