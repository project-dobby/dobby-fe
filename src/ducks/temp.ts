export type State = {
    title: string
};

const initialState = {
    title: 'tempdakfjdalkjfskorary'
};

enum ActionType {
    GET_TEMP = '@temp/GET_TEMP'
}

export const getTemp = () => ({
    type: ActionType.GET_TEMP,
    data: {
        title: 'temp!'
    }
});

export default function (state: State = initialState, action: any) {
    switch (action.type) {
        case ActionType.GET_TEMP:
            return {
                ...state,
                title: action.data.title
            };
        default:
            return state;
    }

}