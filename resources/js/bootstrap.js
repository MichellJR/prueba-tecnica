import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.post['Content-Type'] = 'application/json';
window.axios.defaults.headers.put['Content-Type'] = 'application/json';
window.axios.defaults.headers.common['Accept'] = 'application/json';

