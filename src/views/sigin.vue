<template>
    <main class="pt-3">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 align-self-center ">
                    <h1>Sign In</h1>
                      <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="form-text p-1">Email address</label>
                                <input type="email" class="form-control form-input p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1" class="form-text p-1">Password</label>
                                <input type="password" class="form-control form-input p-3 mb-3" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary border p-3 text-uppercase">sign in</button>
                     </form>
                     <div class="row py-3">
                         <div class="col">
                             New Customer?
                             <router-link to="/register" class="link">Register</router-link>
                         </div>
                     </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
export default {
    name:'sigin'

}
</script>

<style scoped>
h1{
    text-transform: uppercase;
}
.form-text{
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
}
.form-input{
    background-color: #f7f7f9;
    border: none;
  
    
}
.btn{
    background-color: #1a1a1a;
    border-color: #1a1a1a;
}
.btn:hover{
     background-color: #0a0a0a;
    border-color: #0a0a0a;
}
.link{
    color:#1a1a1a;
    text-decoration: none;
    background-color: transparent;
}
.link:hover{
    text-decoration: underline;
}
</style>