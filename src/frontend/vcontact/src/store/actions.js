import axios from 'axios'
import * as types from './mutationTypes'

export const getAllContacts = ({ commit }) => {
  axios.get('/contacts/data')
    .then(response => {
      commit(types.GETTED_ALL_CONTACTS_SUCCESS, { contacts: response.data })
    })
    .catch(error => {
      commit(types.GETTED_ALL_CONTACTS_FAILED, { errorMsg: error.message })
    })
}
