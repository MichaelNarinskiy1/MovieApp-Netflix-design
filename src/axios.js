import  axios  from "axios";


//create base url to all request to moviedb
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});




export default instance;