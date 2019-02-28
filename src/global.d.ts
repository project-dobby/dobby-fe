import {State as TempState} from 'src/ducks/temp';

declare global {
    type Store = {
        temp : TempState
    };
}
