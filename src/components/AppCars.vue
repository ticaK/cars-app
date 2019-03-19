<template>
  <div id="app">
   <h1>Cars</h1>
     <div v-for="car in cars" :key="car.id">
       <p>brand:{{car.brand}}</p>
       <p>model:{{car.model}}</p>
       <p>year:{{car.year}}</p>
       <p>max speed:{{car.maxSpeed}}</p>
       <p>is Automatic{{car.isAutomatic}}</p>
       <p>engine:{{car.engine}}</p>
       <p>numberOfDoors:{{car.numberOfDoors}}</p>
       <hr>
    </div>
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
            const{data}=await cars.getCars();
            this.cars=data;
        } catch(error) {
            console.log(error);
        }
   }
}
</script>

<style>
</style>