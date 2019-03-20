<template>
    <div>
        <h1>{{ this.car.id ? 'Edit car' : 'Add car'}}</h1>
        <form @submit.prevent="onSubmit">

            <div class="form-group"> 
                <label>Brand:</label>
                <input type="text" class="form-control" required="required" minlength=2 v-model="car.brand">
            </div>


            <div class="form-group"> 
                <label>Model:</label>
                <input type="text" class="form-control" required="required" minlength=2 v-model="car.model">
            </div>

            <div class="form-group"> 
                <label>Year:</label>
                    <select class="form-control" required="required" v-model="car.year">
                        <option v-for="year in years" :key="year" :value="year" >{{year}}</option><br>
                    </select><br>
            </div>

            <div class="form-group"> 
                <label>Max speed:</label>
                <input type="number" class="form-control" v-model="car.maxSpeed">
            </div>

            <div class="form-group"> 
                <label>Number of doors</label>
                <input type="number" class="form-control" required="required" v-model="car.numberOfDoors" >
            </div>

            <div class="form-group"> 
                Is automatic:<input type="checkbox"  value="True" v-model="car.isAutomatic">  <br>
            </div>

        <div class="form-group"> 
    
        <input type="radio" name="engine" value="diesel" v-model="car.engine" required> Diesel<br>
        <input type="radio" name="engine" value="petrol" v-model="car.engine"> Petrol<br>
        <input type="radio" name="engine" value="electric" v-model="car.engine"> Electric<br>
        <input type="radio" name="engine" value="hybrid" v-model="car.engine"> Hybrid<br>
        </div>

        <button class="btn btn-success" type="submit">Add car</button>
        <button @click="reset" type="reset" class="btn btn-danger">Reset</button>
        <button @click="preview" type="button" class="btn btn-info">Preview</button>
        
        
        
    </form>
    </div>
    

</template>

<script>
import {cars} from "../services/Cars"
export default {
    data(){
        return {
            years:this.getYears(),

            car:{ brand:"", model:"", year:1900, maxSpeed:0, numberOfDoors:0, isAutomatic:"", engine:""},
            
           
        }
    },
    methods:{
        getYears(){
            let years=[];
            for(let i = 1990; i < 2019; i++){
                years.push(i);
            }
            return years;
        },

        onSubmit () {
            if (this.car.id) {
                this.editCar()
            }else {
                this.addCar()
            }
            
        },
       
        addCar() {                
                cars.add(this.car)
                .then((success) => {
                    this.car = {}
                    this.$router.push('/cars')
                }).catch((error)=>{
                         console.log(error)
                })

        },
        editCar(){
        cars.edit(this.car)
        .then((success)=>{
           this.$router.push('/cars')
        }).catch((error)=>{
          console.log(error)
        })

      },
        reset(){
            this.car={};
        },


        preview(){
            let details= `brand:${this.car.brand}, model:${this.car.model}, year:${this.car.year},maximum speed: ${this.car.maxSpeed},number of Doors: ${this.car.numberOfDoors},engine: ${this.car.engine},automatic:${this.car.isAutomatic}`;
            alert(details);
        }
    },
     created () {
    this.$route.params.id && cars.getId(this.$route.params.id)
      .then((response) => {
        this.car = response.data
      })
  }
}


          

    


</script>

<style scoped>

form {
    margin: 100px;
}
button {
    margin:10px;
}

</style>
