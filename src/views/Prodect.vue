<template>
    <div class="prodect pt-3">
         <div class="container">
            <router-link class=" btn my-3" to="/"> go back</router-link>
            <div class="row">
                <div class="col-md-6">
                    <img :src="prodect.img"  class="img-fluid" alt="">
                </div>

                <div class="col-md-3">
                    <div class="list-group list-group-flush">
                        <div class="list-group-item">
                            <h3 class="text-muted">{{prodect.name}}</h3>
                        </div>

                        <div class="list-group-item">
                            <div class="rating">
                                <span >
                                     <fa icon="star"  size="lg" class="checked"
                                      v-for="(prodect,index) in prodect.rating" :class="'checked'" :key="index"/>
                                </span>
                                
                                <span class="px-1">{{prodect.numReviews}} reviews</span>
                                 
                            </div>
                        </div>

                         <div class="list-group-item">
                           Price: <span> ${{prodect.price}}</span> 
                        </div>

                         <div class="list-group-item">
                         Description:
                        {{prodect.description}}
                        </div>

                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item" >
                                <div class="row">
                                    <div class="col"> Price :</div>
                                    <div class="col"> <strong>$ {{prodect.price}}</strong></div>
                                </div>
                            </div>
                            <div class="list-group-item" >
                                <div class="row">
                                    <div class="col">
                                        status: 
                                    </div>
                                    <div class="col">
                                        <span v-if="prodect.countInStock > 0">In Stock</span>
                                        <span v-else>Out of Stock</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item" v-if="prodect.countInStock > 0" >
                                <div class="row">
                                    <div class="col"> Qty</div>
                                    <div class="col">
                                        <select class="form-control select-box" v-model="qut">
                                            <option  v-for="(prodect,index) in prodect.countInStock" :key='index ' 
                                             :valu='index+1'>
                                                {{index+1}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

        
                            

                            <div class="list-group-item" v-if="prodect.countInStock > 0">
                               
                                <router-link 
                               :to="{name:'cart'}"
                                 class="btn-add-a "
                                 @click="addToCart()"
                                > 
                                 <button 
                                type="button" 
                                class="btn-block btn  btn-add w-100 h-100"> 
                                 Add To Cart
                                  </button> 
                                 </router-link> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-6">
                    <h2>Reviews</h2>
                    <div role="alert" class="fade alert alert-info show">
                        {{prodect.numReviews}}</div>
                    <div class="list-group list-group-flush" >
                        <div class="list-group-item">
                            <h2 class="text-muted">Write a Customer Review</h2>
                            <form >
                                <div class="form-group">
                                    <label for="rating" class="form-label"> 
                                        Rating </label>

                                      <select  id="rating" class="form-control">
                                          <option value>Select...</option>
                                          <option value="1">1-Poor</option>
                                          <option value="2">2 - Fair </option>
                                          <option value="3">3 - Good </option>
                                          <option value="4">4 - Very Good</option>
                                          <option value="5">5 - Excellent</option>
                                    </select>  
                                </div>

                                <div class="form-group pt-1">
                                    <label for="comment" class="mb-1"> Comment</label>
                                    <textarea  id="comment" rows="3" class="d-block form-group w-100 h-100" ></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary p-3 btn-submit" > Submit</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>


       
            

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'Prodect',

      beforeCreate() {
        this.$store.commit('fireStroge')
    },

       mounted(){
           
         let   id = this.$route.params.id;
            this.getprodect(id);
          this.cart=this.$store.state.cart
    },
    data(){
        return{
           qut:1,
            prodect:[],
           cart:{
                item:[]
            },
            
           
        }
    },




    methods:{

      getprodect(id){
        axios.get(`http://localhost:3000/Products/${id}`)
      .then(respo=>{
       this.prodect= respo.data
        let name =this.prodect.name;
        document.title = name + "| OmAr Store"
      
      })  
      .catch(error=>{
        console.log(error);
      })
    },

    addToCart(){
      
        if(isNaN(this.qut)||this.qut <1){
            this.qut=1
        }
        const item ={
            prodect: this.prodect,
            Q: this.qut
        }
      
        this.$store.commit('additemToCart', item)
        console.log("done33");
    }
    }
}
</script>

<style scoped>
*{
    font-weight: 300;
}
.btn{
 text-transform: uppercase;
 background-color: #fff;
 font-weight: 500;
}

h3,h2{
    letter-spacing: 3px;
    font-weight: 600;
}

.checked {
  color: orange;
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



.btn-add{
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    color:#fff;
    appearance: none;
}
.btn-add:hover{
     background-color: #0a0a0a;
    border-color: #0a0a0a;
    color:#fff;
    appearance: none;
}

textarea{
    background-color: #f7f7f9;
    border:0 solid #ced4da;
    margin-bottom: 1.5rem;
}
.btn-submit {
       background-color: #1a1a1a;
    border-color: #1a1a1a;
    color:#fff;
    appearance: none;
    border-radius: 0;
    text-decoration: none;
}
.btn-submit:hover{
       background-color: #1a1a1a;
    border-color: #1a1a1a;
    
}
.btn-add-a{
    text-decoration: none;
    color: #fff;;
}
</style>