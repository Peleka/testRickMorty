import axios from "axios"

export const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

export const characterAPI = {
    getCharacters(page: number, status: string, name: string ) {
        return instance.get(`/character/?page=${page}&status=${status}&name=${name}`)
    },
    // getEpisode() {
    //     return instance.get(`/episode`)
    // }
}