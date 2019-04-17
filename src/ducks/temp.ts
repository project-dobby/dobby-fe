export type State = {
    title: string;
};

const initialState = {
    title: 'temp',
};

enum ActionType {
    GET_TEMP = '@temp/GET_TEMP',
    SET_TEMP = '@temp/SET_TEMP'
}

export const getTemp = () => ({
    type: ActionType.GET_TEMP,
    payload: {
        title: 'temp!',
    },
});

export const setTemp = (title: string) => ({
    type: ActionType.SET_TEMP,
    payload: {
        title
    },
});

export default function (state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionType.GET_TEMP:
        case ActionType.SET_TEMP:
            return {
                ...state,
                title: action.payload.title,
            };
        default:
            return state;
    }
}
