import axios, { AxiosInstance, AxiosResponse } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/RaisRoos/inspections',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPage(subURL: string): Promise<AxiosResponse<any>> {
        return apiClient.get(subURL);
    },
}