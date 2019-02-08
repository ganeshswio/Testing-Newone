<template>
    <div id="home">
       <h3>Home</h3>

     <form @submit.prevent="submit">
         <div class="">
            <label for="name">name:</label>
            <input type="text" v-model="name"> <br> <br>

            <label for="email">Email :</label>
            <input type="text" v-model="email"> <br> <br>

            <label for="address">Address :</label>
            <input type="text" v-model="address"> <br> <br>

            <!-- <label for="phone">Phone :</label>
            <input type="text" v-model="phone"><br><br> -->
            <button v-on:click.prevent="submit">Submit</button>
     </div>
     </form>


    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name : 'home',
    components:{
        
    },
    data(){
        return{
            name:null,
            email:null,
            address:null
            // phone:null
            
        }
    },
    methods:{
        submit(){
              db.collection("users").add({
                name:this.name,
                email:this.email,
                address:this.address
                })
                 .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                 
                })
                .then(
                this.$router.push('/view')
                )
                .catch(function(error) {
                console.error("Error adding document: ", error);
                });  

        }
    }

}
</script>

<style>

</style>
