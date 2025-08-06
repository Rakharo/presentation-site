import { iUser } from "@/interfaces/userInterface";
import apiConfig from "@/utils/apiConfig";

export async function getUsers() {
    try {
        const response = await apiConfig.get('/User');
    
        return response.data;
    } catch(error) {
        console.error(error)
    }
}



export async function createUser(data: iUser) {
    try { 
        const response = await apiConfig.post('/User', data);
        return response.data;
    } catch(error) {
        console.error(error)
    }
}