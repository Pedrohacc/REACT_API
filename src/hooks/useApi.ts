import axios from 'axios';
const api = axios.create({

    baseURL: process.env.VALIDATE

});


export const useApi =() => ({

    validadeToken: async(token: string) =>{
        const response = await api.post( 'http://localhost:3004/api/validate',{token});
        return response.data;
    },
    signin: async (email: string, password: string) =>{

        const response = await api.post('http://localhost:3004/api/signin',{  email, password })
        return response.data;
    },

    logout: async () => {
        try {
          const response = await api.post('http://localhost:3004/api/logout');
          return response.data;
        } catch (error) {
          console.error(error);
          return error;
        }
      }


});