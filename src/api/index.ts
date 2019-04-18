import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// TODO : set baseUrl
const instance = axios.create({
    baseURL: '',
    timeout: 3000
});

export const mock = new MockAdapter(instance, { delayResponse: 1000 });

export default instance