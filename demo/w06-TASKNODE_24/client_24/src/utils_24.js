import axios from 'axios';

const customFetch_24 = axios.create({
    baseURL:'http://localhost:5000/api/tasks'
});

export default customFetch_24;