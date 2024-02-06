import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.npoint.io/4829d4ab0e96bfab50e7'
});

export default api;