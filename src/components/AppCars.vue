<template>
  <div id="app">
    <table>
      <tr>
        <th>id</th>
        <th>brand</th>
        <th>model</th>
        <th>year</th>
        <th>max speed</th>
        <th>is Automatic</th>
        <th>engine</th>
        <th>numberOfDoors</th>
        <th>Edit</th>
        <th>Delete</th>

       </tr>
       <tr v-for="car in cars" :key="car.id">
         <td>{{car.id}}</tidd>
         <td>{{car.brand}}</td>
         <td>{{car.model}}</td>
         <td>{{car.year}}</td>
         <td>{{car.maxSpeed}}</td>
         <td>{{car.isAutomatic}}</td>
         <td>{{car.engine}}</td>
         <td>{{car.numberOfDoors}}</td>
      <!-- <td><button @click="editCar(car)" class="btn">Edit</button></td> -->
    <td> <router-link :to="{ name: 'edit', params: { id: car.id } }" class="btn btn-default">Edit</router-link></td>

      <td><button @click="deleteCar(car)" class="btn">Delete</button></td>

      </tr>
    </table>

  </div>  
</template>

<script>
import {cars} from "../services/Cars"
export default {
    data(){
        return {
            cars:[]
        }
    },
    props:['id'],
    async created(){
        try{
            const{data}=await cars.getAll();
            this.cars=data;
        } catch(error) {
            console.log(error);
        }
   },
   methods:{
     
      
      deleteCar(car) {                
        cars.delete(car.id)
        .then((success) => {
            this.cars = this.cars.filter(c => c !== car)
        }).catch((error)=>{
                console.log(error)
        })
      }  
  }
}
</script>

<style scoped>
table, th, td {
  text-align: center;
  border: 1px solid black;
}

table {
  margin-left: 50px;
  width: 80%;
}
th {
  background-color: #cec7c7;
  font-weight: bold;
}
</style>