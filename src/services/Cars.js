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

    add({ brand, model, year, maxSpeed, isAutomatic, engine, numberOfDoors }) {
        return http
            .post('cars', { 
                brand, 
                model, 
                year, 
                maxSpeed, 
                numberOfDoors,
                isAutomatic, 
                engine
            })
            .then(({ data }) => data)       
    }

    getCars(){
        return this.get('/cars');  
    }

    // find(id){
    // return this.get(`posts/${id}`);  
    // }
   
    
}


 export const cars = new Cars()