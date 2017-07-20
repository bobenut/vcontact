import * as types from './mutationTypes'

export const state = {
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

export const mutations = {
  [types.GETTED_ALL_CONTACTS_SUCCESS]  (state, { contacts }) {
    for (let i = 0; i < contacts.length; i++) {
      let c = contacts[i]
      state.contactChunks[c.nameFirstWordChr].push(c)
      state.contacts[c._id] = c
    }
  },
  [types.GETTED_ALL_CONTACTS_FAILED]  (state, { errorMsg }) {}
}
