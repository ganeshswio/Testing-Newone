<template>
    <div id="register">
        <h3>Register</h3>
     <form  @submit.prevent="register">
       
        <div class="">
             <label for="email"> Email:</label>
            <input type="text" id="email" v-model="email"><br><br>
        </div>
        <div>
          <label for="password" >Password:</label>
            <input type="password" id="password" v-model="password"><br><br>
        </div>
        <div class="">
                <button v-on:click="register">Register</button>
        </div>
         </form>
    
    </div>
</template>

<script>
import * as firebase from 'firebase'
import db from './firebaseInit'
export default {
    name : 'register',
    data(){
        return{
            email:'',
            password:''
            
        }
    },


   methods:{
    //
    register:function(e){
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.email, this.password)
     .then(
      user =>{
            console.log(user)
            alert ('account created for ${user.email}');
            this.$router.push('/home')
       })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    // }
   }
   }

}
</script>

<style>

</style>
