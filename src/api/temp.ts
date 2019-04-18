import fetcher, {mock} from './index';
import {AxiosPromise} from 'axios';

export type tempType = {
    title: string;
};

mock.onGet('/getTemp')
    .reply(200, {
        title: 'temp from server'
    });

mock.onPost('/setTemp')
    .reply(200, {title : 'changed title!'});

export function getTemp(): AxiosPromise<tempType> {
    return fetcher.get('/getTemp');
}

export function setTemp(params: { title: string }): AxiosPromise<tempType> {
    return fetcher.post('/setTemp', {params});
}