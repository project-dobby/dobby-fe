import { State as TempState } from 'src/ducks/temp';

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
    }

    type Action = {
        type: string;
        payload: any;
    };

    type Store = {
        temp: TempState;
    };
}
