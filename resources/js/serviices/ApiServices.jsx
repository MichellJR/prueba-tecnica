const API_BASE_URL = '/api';
const apiService = {
    request: async (method, endpoint, data = null) => {
       
        try {
          
            const url = `${API_BASE_URL}/${endpoint}`; 
            const config = {
                headers: {
                    'Accept': 'application/json',
                }
            }

            let response

            switch (method.toLowerCase()) { 
                case 'get':
                    response = await window.axios.get(url, config);
                    break;
                case 'post':
                    response = await window.axios.post(url, data, config);
                    break;
                case 'put':
                    response = await window.axios.put(url, data, config);
                    break;
                case 'delete':
                    response = await window.axios.delete(url);
                    break;
                default:
                    throw new Error(`Método HTTP '${method}' no soportado por apiService.`);
            }

            return response.data;
        } catch (error) {
            console.error(`apiService error [${method.toUpperCase()} ${endpoint}]:`, error.response || error.message || error);
            throw error;
        }
    }
};

export default apiService;