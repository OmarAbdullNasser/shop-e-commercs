
//store
import { createApp } from 'vue'
import App from './App.vue'


//Router
import router from './router'

//font-aswome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import  store  from './store'
//Bootstrap
import BootstrapVue3 from 'bootstrap-vue-3'



//Axios
import axios from "axios";



//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//Bootstrap-Vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

library.add(fas)



createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(store)
    .use(router, axios,BootstrapVue3)
    .mount('#app')
