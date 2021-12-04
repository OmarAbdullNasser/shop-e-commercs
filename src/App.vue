<template>
 <header class="headerr">
      <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-xxl">
            <router-link to="/" class="navbar-brand">SUQSHOP</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <form class="d-flex" method="get" action="/search">
                  <input class="form-control me-2 p-3 " type="search" placeholder="Search Products..." aria-label="Search" name ="qsearch">
                  <button class="btn btn-outline-success p-2 btn-search" type="submit">Search</button>
                  </form>

              <ul class="navbar-nav ms-auto text-center  mx-5 mt-sm-2 ">
                <li class="nav-item align-bottom">
                  <router-link :to="{name:'cart'}" class="links">
                    CART 
                     <fa icon="cart-plus" class="iicon"/>
                   </router-link>
                </li>

                <li class="nav-item mx-2">
                    <router-link to="/sigin" class="links">
                     SIGN IN
                     <fa icon="user" class="iicon"/>
                   </router-link>
                </li>
              </ul>
       
        </div>
     </div>
  </nav>
  </header>
  
 
<router-view to='/'></router-view>


 <footer>
   <div class="container">
     <div class="row">
       <div class="col-12 ">
            <div class="text-center py-3 col text-muted ">
         Copyright © 2021 Omar AbdullNasser
        </div>
       </div>
     </div>
   </div>
 </footer>
</template>

<script>

export default{
  
  data(){
    return{
     
    }
  },
  mounted(){
      document.title= 'Home'
  },

 beforeCreate() {
        this.$store.commit('fireStroge')
    },
}
  


// import axios from 'axios';
// export default {
//   data(){
//     return{
//      Prodects:[]
//     }
//   },
//   async created(){
//        const res = await axios.get('http://localhost:3000/Prodects');
//        this.Prodects= res.data;

//   }
 
// }
</script>

<style>
.headerr{
  background-color: #343A40 ;
 
}

.navbar-brand{
  padding: 3rem;
  margin: 1rem;
  color: #fff !important;
}
.btn-outline-success{
     color: #4bbf73 !important;
    border-color: #4bbf73 !important;
}
.btn-outline-success:hover{
  color: #fff !important;
  border-color: #4bbf73  !important;
}
.btn-search{
      color: hsla(0,0%,100%,.5);
}
.btn-search:hover{
      background-color:  #4bbf73 !important;;
}
.links{
  color:hsla(0,0%,100%,.5) !important;
  text-decoration: none;
}
.links:hover,fa:hover{
  color:#fff !important;
}


</style>
