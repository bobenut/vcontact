import Vue from 'vue'
import Vuex from 'vuex'
import contacts from './modules/contacts'
// import * as actions from './actions'
// import * as getters from './getters'
// import { state, mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contacts
  }
})
