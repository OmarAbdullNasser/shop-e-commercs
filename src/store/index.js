import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      item:[]
    }
  
  },
  mutations: {  
    fireStroge(state) {
      if (localStorage.getItem('cart')) {
          state.cart= JSON.parse(localStorage.getItem('cart'))
      }
      else {
        localStorage.setItem('cart',JSON.stringify(state.cart))
      }
    },

    additemToCart(state, item) {
      const exiting = state.cart.item.filter(i => i.prodect.id == item.prodect.id);
      if (exiting.length) {
        exiting[0].Q = parseInt(exiting[0].Q) + parseInt(item.Q);

      } else {
        state.cart.item.push(item)
      }

      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    saveData(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removefromCart(state, removeitem) {
      let index = state.cart.item.indexOf(removeitem);
      state.cart.item.splice(index, 1)
      
      this.commit('saveData')
      
    },
   
  },
  actions: {
  },
  modules: {
  }
})
