import {getTemp, setTemp, tempType} from 'src/api/temp';
import {AxiosResponse} from 'axios';

async function getTempTitle(): Promise<AxiosResponse<tempType>> {
    return await getTemp();
}

async function setTempTitle(title: string): Promise<AxiosResponse<tempType>> {
    return await setTemp({title});
}

export default {
    getTempTitle,
    setTempTitle
};