import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 10000
});

export const login=(name,password)=>api.post('/auth/login', {name, password});