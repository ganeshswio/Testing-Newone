<template>
    <div id="login">
        <h3>Login</h3>
 <form @submit.prevent="login">
       
        <div class="">
             <label for="email"> Email:</label>
            <input type="text" id="email" v-model="email"><br> <br>
        </div>
        <div>
          <label for="password" >Password:</label>
            <input type="password" id="password" v-model="password"><br><br>
        </div>
        <div class="">
                <button v-on:click="login">Login</button>
        </div>
         </form>
    
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'login',
    data(){
        return{
            
             email:'',
            password:''
        }
    },
    methods:{
        
    login(){
   firebase.auth().signInWithEmailAndPassword(this.email, this.password)
   .then(
     user =>{
        console.log('worked')
     alert ('user logged as  ${user.email}');
      this.$router.push('/home');
      
       })
   .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
   }

   

    }
   
  }
</script>

<style>

</style>
