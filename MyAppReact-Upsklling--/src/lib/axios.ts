import axios from "axios"


export const api = axios.create({
    baseURL:"https://app-react-course-bk.azurewebsites.net/api/movie/catalog",}
)