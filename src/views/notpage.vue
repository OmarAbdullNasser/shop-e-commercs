<template>
  
            <div class="col-md-8">
                <h1 class="text-muted" >Shopping Cart</h1>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="" class="img-fluid rounded" />
                                </div>
                                <div class="col-md-3">
                                    <router-link to=""></router-link>
                                </div>
                                <div class="col-md-2">
                                    <span> price</span>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control">
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" class="btn btn-light" >
                                        <fa icon='trash' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    <div>

                           <!-- <div class="alert alert-info text-muted" role="alert">
                    Your cart is empty!<router-link to="/" class="link">Go Back</router-link>
                           </div> -->
                 </div> 
                </div>
            </div>
            </div> 



            <div class="col-md-4">
                <div class="card">
                    <div class="list-group">
                        <div class="list-group-item">
                            <h2 class="p-3 text-muted">Subtotal ( {{qutity}} ) items</h2>
                        </div>
                    </div>
                    <div class="list-group-item d-flex justify-content-center">

                        <button class="btn-block btn btn-dark p-3 text-center w-100">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>

<script>
export default {
    name:'notpage'
}
</script>
<style>

</style>