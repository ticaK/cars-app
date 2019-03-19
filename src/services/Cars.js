import axios from 'axios';
const http = axios.create({
    baseURL:"http://localhost:3000/API"
});

export default class Cars {
    get(url){
        return http.get(url);
    }
    post(url,body){
        return http.post(url,body);
    }

    getCars(){
        return this.get('/cars');  
    }

    // find(id){
    // return this.get(`posts/${id}`);  
    // }
   
    
}


 export const cars = new Cars()