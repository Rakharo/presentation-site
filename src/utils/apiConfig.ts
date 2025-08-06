import axios from 'axios';

const apiConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Você pode adicionar timeout, auth, etc. aqui também
});

export default apiConfig;
