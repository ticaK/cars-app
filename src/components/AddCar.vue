<template>
    <div>
        <form @submit.prevent="addCar()">

            <div class="form-group"> 
                <label>Brand:</label>
                <input type="text" class="form-control" v-model="car.brand" required minlength=2>
            </div>


            <div class="form-group"> 
                <label>Model:</label>
                <input type="text" class="form-control" v-model="car.model" required minlength=2>
            </div>

            <div class="form-group"> 
                <label>Year:</label>
                    <select class="form-control" v-model="car.year" required>
                        <option v-for="year in years" :key="year" :value="year" >{{year}}</option><br>
                    </select><br>
                    <!-- <input type="number" name="year" min="1990" max="2018" v-model="car.year"> -->

            </div>

            <div class="form-group"> 
                <label>Max speed:</label>
                <input type="number" class="form-control" v-model="car.maxSpeed">
            </div>

            <div class="form-group"> 
                <label>Number of doors</label>
                <input type="number" class="form-control" v-model="car.numberOfDoors" required>
            </div>
        <div class="form-group"> 
            Is automatic:<input type="checkbox"  value="True" v-model="car.isAutomatic" required>  <br>
        </div>

        <div class="form-group"> 
    
        <input type="radio" name="engine" value="diesel" v-model="car.engine" required> Diesel<br>
        <input type="radio" name="engine" value="petrol" v-model="car.engine"> Petrol<br>
        <input type="radio" name="engine" value="electric" v-model="car.engine"> Electric<br>
        <input type="radio" name="engine" value="hybrid" v-model="car.engine"> Hybrid<br>
        </div>

        <button class="btn btn-success" type="submit">Add car</button>
        <button @click="reset" class="btn btn-danger">Reset</button>
        <button @click="preview" class="btn btn-info">Preview</button>
        
        
        
    </form>
    </div>
    

</template>

<script>
import {cars} from "../services/Cars"
export default {
    data(){
        return {
            years:[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
            2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
            2010,2011,2012,2013,2014,2015,2016,2017,2018],

            car:{brand:"",model:"",year:1900,maxSpeed:0,numberOfDoors:0,isAutomatic:"",engine:""},
            // errors: []
        }
    },
    methods:{
       
        addCar() {                
                cars
                .add(this.car)
                .then(() => {
                    this.car = {}
                    this.$router.push('/cars')
                })
            },
        reset(){
            this.car={};
        },
        preview(){
            let car="";
            car+= this.car.model+ " "+
            this.car.year+" "+
            this.car.maxSpeed+" "
            this.car.numberOfDoors+" "
            this.car.isAutomatic+" "+
            this.car.engine+" ";
            alert(car);
        }

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
