<template>
<main>
    <div class="container">
        <div class="Latest-products">
          <h1 class="pt-2 mb-5">LATEST PRODUCTS</h1>

          <!--Cards-->
          <div class="cards row ">

       <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 prodect " v-for="prodect in Prodects" :key="prodect.id" >
          <div class=" my-3 p-3 rounded card shadow" >
              <img :src="prodect.img" class="card-img-top img-thumbnail" alt="...">
              <div class="card-body">
                <router-link :to="{name:'Prodect', params:{id: prodect.id}}" class="h5 name">{{prodect.name}} </router-link>
              
                <div class="reviews pl-2  " >
                    <fa icon="star"  size="lg" class="d-inline-flex" v-for="(prodect,index) in prodect.rating" :class="'checked'" :key="index"  /> 
                </div>
                 <span class="m2- d-block ">{{prodect.numReviews}} reviews</span>
                <p class="card-text mt-3 display-4">{{prodect.price}}$</p>
                <router-link :to="{name:'Prodect', params:{id: prodect.id}}" class="btn btn-outline-info"> Veiw More</router-link>
              </div>
          </div>
        </div>
      </div>
    </div>


    </div>
</main>
</template>

<script>
import axios from 'axios';
export default {
    name:'LastProdects',
data(){
    return{
     Prodects:[],
 
     
    }
  },
mounted(){
      this.getLastprodects();
  },
  methods:{
    getLastprodects(){
      axios.get('http://localhost:3000/Products')
      .then(respo=>{
        this.Prodects= respo.data
      })
      .catch(error=>{
        console.log(error);
      })
    },
   

    get_url(id){
      return `http://localhost:8080/Prodect/${id}`;
    }
  
  }

}
</script>

<style scoped>
.name{
text-decoration: none;
color:black
}
.name:hover{
  text-decoration: underline;
}
.prodect{
  cursor: pointer;
}
.checked {
  color: orange;
}

</style>