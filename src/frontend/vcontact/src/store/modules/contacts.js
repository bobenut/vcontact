import axios from 'axios'
import * as types from '../mutationTypes'

// initial state
const state = {
  contactChunks: {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: []
  },
  contacts: {}
}

// getters
const getters = {
  contactChunks: state => state.contactChunks
}

// actions
const actions = {
  getAllContacts ({ commit }) {
    axios.get('/contacts/data')
      .then(response => {
        commit(types.GETTED_ALL_CONTACTS_SUCCESS, { contacts: response.data })
      })
      .catch(error => {
        commit(types.GETTED_ALL_CONTACTS_FAILED, { errorMsg: error.message })
      })
  }
}

// mutations
const mutations = {
  [types.GETTED_ALL_CONTACTS_SUCCESS]  (state, { contacts }) {
    for (let i = 0; i < contacts.length; i++) {
      let c = contacts[i]
      state.contactChunks[c.nameFirstWordChr].push(c)
      state.contacts[c._id] = c
    }
  },

  [types.GETTED_ALL_CONTACTS_FAILED]  (state, { errorMsg }) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
