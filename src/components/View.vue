<template>
    <div id=view>
         <h3>View</h3>
                
               
                <div class="">
                    <ul>
                        <li v-for="(user , index) in userdata" :key="index" > 
                                <div class="table rounded bordered">
                                <thead>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </thead>
                                <tbody>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.address}}</td>
                                </tbody>

                              </div>
                            

                        </li>
                    </ul>
                </div>
                
              
                
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    props:['tit','con'],
    name: 'view',
    data(){
        return{
          userdata:[]
        }
    },
       created(){
                db.collection("users").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data ={
                           "name":doc.data().name,
                           "email":doc.data().email,
                           "address":doc.data().address
                        }
                        console.log(doc.data());
                        this.userdata.push(data)
                        // console.log(doc.data())
                // console.log(`${doc.id} => ${doc.data()}`);
            });
            });
            },
    methods:{
         
    }
   

}
</script>

<style>
.change a{
  color:black;;
}
.change li{
    color:black;
}
</style>
