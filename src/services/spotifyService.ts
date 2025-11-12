import apiConfig from "@/utils/apiConfig";

export async function getTopArtists() {
    try {
        const response = await apiConfig.get('/Spotify/top-artists');

        return response.data;
    } catch(error) {
        console.error(error)    
    }
}

export async function getTopMusics() {
    try {
        const response = await apiConfig.get('/Spotify/top-musics');

        return response.data;
    } catch(error) {
        console.error(error)
    }
}