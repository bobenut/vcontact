import axios from 'axios'
import * as types from '../mutationTypes'

// initial state
const state = {
  contactChunks: {},
  contacts: {},
  contactCUDialogIsOpen: false,
  contactCUDialogOpenCUMode: ''
}

// getters
const getters = {
  contactChunks: state => state.contactChunks
}

// actions
const actions = {
  openContactCUDialog ({ commit }, payload) {
    commit(types.UI_ACTION_OPEN_CONTACT_CU_DIALOG, payload)
  },
  closeContactCUDialog ({ commit }, payload) {
    commit(types.UI_ACTION_CLOSE_CONTACT_CU_DIALOG, payload)
  },
  getAllContacts ({ commit }) {
    axios.get('/contact/data')
    .then(response => {
      console.log('getted all contacts success')
      commit(types.GETTED_ALL_CONTACTS_SUCCESS, { contacts: response.data })
    })
    .catch(error => {
      console.log('getted all contacts success: %s', error.message)
      commit(types.GETTED_ALL_CONTACTS_FAILED, { errorMsg: error.message })
    })
  },
  removeContact ({ dispatch, commit }, contact) {
    axios({
      url: '/contact/data',
      method: 'delete',
      data: { contactId: contact._id },
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log('removed contact success: %s', contact._id)
      dispatch('getAllContacts')
    })
    .catch(error => {
      console.log('removed contact error: %s', error.message)
      commit(types.REMOVE_CONTACT_FAILED, { errorMsg: error.message })
    })
  },
  saveNewContact ({ dispatch, commit }, task) {
    axios({
      url: '/contact/data',
      method: 'post',
      data: { contact: task.data },
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log('added contact success')
      task.success()
      dispatch('getAllContacts')
    })
    .catch(error => {
      console.log('added contact error: %s', error.message)
      commit(types.ADD_CONTACT_FAILED, { errorMsg: error.message })
    })
  },
  saveUpdatedContact ({ dispatch, commit }, task) {
    axios({
      url: '/contact/data',
      method: 'put',
      data: { contact: task.data },
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log('modified contact success')
      task.success()
      dispatch('getAllContacts')
    })
    .catch(error => {
      console.log('modified contact error: %s', error.message)
      commit(types.ADD_CONTACT_FAILED, { errorMsg: error.message })
    })
  }
}

// mutations
const mutations = {
  [types.GETTED_ALL_CONTACTS_SUCCESS]  (state, { contacts }) {
    state.contactChunks = {
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
    }

    for (let i = 0; i < contacts.length; i++) {
      let c = contacts[i]
      state.contactChunks[c.nameFirstWordChr].push(c)
      state.contacts[c._id] = c
    }
  },

  [types.GETTED_ALL_CONTACTS_FAILED]  (state, { errorMsg }) {},

  [types.REMOVE_CONTACT_FAILED]  (state, { errorMsg }) {},

  [types.UI_ACTION_OPEN_CONTACT_CU_DIALOG]  (state, { cuMode }) {
    state.contactCUDialogIsOpen = true
    state.contactCUDialogOpenCUMode = cuMode
  },
  [types.UI_ACTION_CLOSE_CONTACT_CU_DIALOG]  (state, { cuMode }) {
    state.contactCUDialogIsOpen = false
    state.contactCUDialogOpenCUMode = cuMode
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
