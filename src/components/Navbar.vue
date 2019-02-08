<template>
    <div id="navbar">
    <div>
         <nav>

             <ul>
                 <li ><router-link to="/home">Home</router-link></li>
                 <li v-if="!userlogged"><router-link to="/">Login</router-link></li>
                 <li v-on:click="logout" v-else><router-link to="" >Logout</router-link></li>
                 <li v-if="!userlogged"> <router-link to="/register">Register</router-link></li>
                 <li v-else><router-link to="/view">View</router-link></li>
             </ul>
         


     </nav>
    </div>
      <!-- <div v-if=>
         <nav>
         <router-link to="/">Dashboard</router-link>
         <router-link to="/login">Login</router-link>
         <router-link to="/register">Register</router-link>
         


     </nav>
    </div> -->
      
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name : 'navbar',
    data(){
        return{
            userlogged:null
            
        }
    },
    methods:{
        logout(){
            firebase
            .auth()
            .signOut()
            .then(()=>{
                this.$router.push('/');
                console.log('Logged out')
            });

        },
       
    },
     mounted(){
                    var vm = this;
                    firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log('user is there');
                    vm.userlogged = true;
                } else {
                    // No user is signed in.
                    console.log('no user exisited')
                    vm.userlogged = false;
                }
                });
                        var user = firebase.auth().currentUser
                        if(user){
                            console.log('User is logged in')
                        }else{
                            console.log("User hasnt logged in")
                        }
                }

}
</script>

<style>
nav {
    background-color: aqua;
    padding: 5px;
    
}
li{
    display: inline-block;
    padding: 10px,
}
a{
    padding: 10px;
    text-decoration: none;
}
</style>
