<template>
    <main class="pt-3">
     <div class="container">
         

         <!-- <div v-for=" (item,index) in cart.item" :key="item.prodect.id">
             <h4> name is </h4>
             {{this.cart.item[index].prodect.name}}

             <h4> price is </h4>
             {{this.cart.item[index].prodect.price}}
         </div>-->

        <div class="row">
            
            <!--Shopping card-->
            <!--المشتريات-->
              <div class="col-md-8">
                 <h1 class="" >Shopping Cart</h1>
                <div class="list-group list-group-flush">
                    <div class="list-group-item"  v-for="(item,index) in cart.item" :key="item.prodect.id">
                        <div class="row">
                            <div class="col-md-2">
                                <img :src="this.cart.item[index].prodect.img" class="img-fluid rounded" />
                            </div>
                            <div class="col-md-3">
                                  <span>{{this.cart.item[index].prodect.name}}</span>
                            </div>
                            <div class="col-md-2">
                                <span>  ${{this.cart.item[index].prodect.price}}</span>
                            </div>
                            <div class="col-md-2">
                               <span class="q">{{this.cart.item[index].Q}} </span> 
                                <a class="mx-2" @click="Increament(this.cart.item[index])">+</a>
                                <a class="mx-2" @click="Decreament(this.cart.item[index])">-</a> -->

                            </div>
                            <div class="col-md-2">
                                 <button type="button" class="btn btn-light" 
                                  @click=" this.$store.commit('removefromCart',item);">
                                        <fa icon='trash' />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>    

            
            


            <!-- sum-->
              <div class="col-md-4">
                  <div class="card">
                      <div class="list-group">
                          <div class="list-group-item">
                            <h2 class="p-3 text-muted">Subtotal ( {{this.cart.item.length}} ) items</h2>
                            <h4 class="px-3"  v-if="this.cart.item.length>0" >
                                 <h4 v-for=" (item,index) in cart.item" :key="item.prodect.id"> {{total(this.cart.item[index].prodect.price,this.cart.item[index].Q)}}</h4> -->
                                </h4>

                               <h4 class="px-3"  v-else> No Prodects</h4>
                           </div
                           >
                         
                            <div class="list-group-item d-flex justify-content-center">
                                <button class="btn-block btn btn-dark p-3 text-center w-100">Proceed To Checkout</button>
                            </div>   
                      </div>   
                  </div>
            </div>   


    



         </div>       
    </div> 
</main>
    
</template>

<script>
// import axios from 'axios';
export default {
    name:'cart',
 
    data(){
        return{
            cart:{
                item:[]
            }, 
           
         
            
        }
    },
    computed:{
        
    },

      beforeCreate() {
        this.$store.commit('fireStroge')
    },

    mounted(){
        this.cart= this.$store.state.cart
     
    },

    methods:{
         total(price,qut){
            let sum=0;
            sum= price*qut;
            return  sum;
        },

        Increament(item){
            item.Q += 1
            this.updateCart()
        },
        Decreament(item){
            item.Q -= 1
            if(item.Q===0){
                this.$store.commit('removefromCart',item);
            }
            this.updateCart()
        },
         updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart));
    },
  
  
    },
    
}
</script>

<style scoped>
h1{
text-transform: uppercase;

}
.link{
    text-decoration: none;
    color:#0d6efd;
    padding-left: 5px;
}
.link:hover{
text-decoration: underline;
}
select, option{
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
     background-repeat: no-repeat;
     background-position-x: 100%;
    background-position-y: 5px;
    background-color: #f7f7f9;
    border:0 solid #ced4da;
    color:black
}

a{
    font-size: 20px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
a:hover{
    color:blue
}
.q{
    font-size: 30px;
    font-weight: bolder;
}
</style>