<template>
  <div id="app">
    <table>
      <tr>
        <th>brand</th>
        <th>model</th>
        <th>year</th>
        <th>max speed</th>
        <th>is Automatic</th>
        <th>engine</th>
        <th>numberOfDoors</th>
        <th>Edit</th>
       </tr>
       <tr v-for="car in cars" :key="car.id">
         <td>{{car.brand}}</td>
         <td>{{car.model}}</td>
         <td>{{car.year}}</td>
         <td>{{car.maxSpeed}}</td>
         <td>{{car.isAutomatic}}</td>
         <td>{{car.engine}}</td>
         <td>{{car.numberOfDoors}}</td>
      <td><button @click="editCar()" class="btn">Edit</button></td>

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
    async created(){
        try{
            const{data}=await cars.getAll();
            this.cars=data;
        } catch(error) {
            console.log(error);
        }
   },
   methods:{
   editCar(){
     this.$router.push('/edit/:id')
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