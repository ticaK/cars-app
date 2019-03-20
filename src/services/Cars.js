import axios from 'axios';
const http = axios.create({
    baseURL:"http://localhost:3000/API"
});

export default class Cars {

    getAll(){
        return http.get('/cars');  
    }
    post(url,body){
        return http.post(url,body);
    }

    
    add(car){
        return http.post('/cars',car)
    }

    delete(id){
        return http.delete(`cars/'${id}`);
    }

    getId(id){
        return http.get(`cars/${id}`);  
    }

    edit(car){
        return http.put(`cars/${car.id}`,car)
    }
    
   
    
}


 export const cars = new Cars()