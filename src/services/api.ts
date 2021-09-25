import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://aircall-job.herokuapp.com',
});
