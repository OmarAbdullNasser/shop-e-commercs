<template>
  <div class="main py-3">
  <!--main  banner -->
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

         <div class="carousel-inner bg-dark">

             <div class="carousel-item active">
                  <img src="/img/alexa.jpg" class="d-block img-fluid " alt="...">
                  <div class="carousel-caption">
                      <h2>Amazon Echo Dot 3rd Generation</h2>
                    </div>
              </div>

              <div class="carousel-item">
                <img src="/img/phone.jpg" class="d-block img-fluid" alt="...">
                <div class="carousel-caption">
                      <h2>iPhone 11 Pro 256GB Memory</h2>
                  </div>
              </div>
              

            
             <div class="carousel-item">
                <img src="/img/airpods.jpg" class="d-block img-fluid" alt="...">
                <div class="carousel-caption">
                      <h2>Airpods Wireless Bluetooth Headphones</h2>
                  </div>
              </div>
            </div> 
            



            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
    </div>
  </div> 
</div>

<LastProdects />
</template>

<script>
import LastProdects from '../views/LastProdect.vue' 
export default {
  name:'baner',
  components :{
    LastProdects
  },
 
  
}
</script>

<style scoped>
.container{
  overflow: hidden;
}
.carousel .carousel-item {
  height:400px;
  position: relative;
  overflow: hidden;
}

.carousel-item a{
  cursor: pointer;
}
.carousel-item img {
    height: 300px;
    padding: 30px;
    border-radius: 50%;
    margin: 40px auto;
     cursor: pointer;
}

.carousel-item h2{
  color:#fff;
   cursor: pointer;
}
@media screen and (max-width: 768px) {
 .carousel-item  h2{
   font-size: 20px;
  }
  .carousel-item img{
    padding: 50px;
  }
}

</style>