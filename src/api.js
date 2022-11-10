import axios from "axios"

class Api {
    async fetchNews(data) {
        try {
            const result = await axios.get(`https://newsapi.org/v2/everything?q=${data.searchValue}&from=${data.inputFrom}&to=${data.inputTo}&sortBy=popularity&apiKey=25acb2de0e2c4db8afe3d6d7ecfe04ad`)
            return result.data
        } catch(err) {
            console.log(err)
        } 
    }
}

export const api = new Api()
