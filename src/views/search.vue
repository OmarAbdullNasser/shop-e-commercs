<template>
    <main class="py-3">
        <div class="container">
             <router-link class=" btn btn-light my-3" to="/"> go back</router-link>
             
            
             <div class="row">
               
                 <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" v-if="this.prodect.length>0">
                       <h1 class="text-muted">Latest products</h1>
                     <div class="my-3 p-3 rounded card">
                         <router-link to="#" v-for="(item, index) in prodect" :key="item.id" >
                             <img :src="this.prodect[index].img" alt="" class="card-img-top">
                         </router-link>

                         <div class="card-body"  v-for="(item, index) in prodect" :key="item.id">
                             <router-link to="#" class="a-prodect">
                                 <div class="card-title">
                                     <strong>{{prodect[index].name}}</strong>
                                 </div>
                             </router-link>

                             <div class="card-text">
                                 <div class="rating">
                                      <span >
                                     <fa icon="star"  size="lg" class="checked"
                                      v-for="(prodect,index) in prodect[index].rating" :class="'checked'" :key="index"/>
                                </span>
                                 </div>

                                 <h3 class="card-text">
                                      Price: <span> ${{prodect[index].price}}</span> 
                                 </h3>
                             </div>
                         </div>

                     </div>
                 </div>

                 <div class="" v-else>
                     <h1> There is no Prodects in Store in such Name</h1>
                 </div>
             </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    name:'Search',
    data(){
        return{
            prodect:[],
            q: ''
        }

    },
    mounted(){
        document.title=" Search | OmAr Store"
        this.q=this.$route.query.qsearch;
        this.searchprodect(this.q);
        
    },
    methods:{
    searchprodect(sq){
        axios.get(`http://localhost:3000/Products?name=${sq}`)
      .then(respo=>{
       this.prodect= respo.data
       console.log("done");
        // document.title = this.prodect.name + "| OmAr Store"
      
      })  
      .catch(error=>{
        console.log(error);
      })
    },
    }
}
</script>


<style >
*{
    font-weight: 300;
}
.btn{
 text-transform: uppercase;
 background-color: #fff;
 font-weight: 500;
}
h1{
    text-transform: uppercase;
}
.a-prodect{
    text-decoration: none;
    color: #000;;
}
.a-prodect:hover{
    text-decoration: underline;
    color:#000;
}
.checked{
    color:orange
}
</style>