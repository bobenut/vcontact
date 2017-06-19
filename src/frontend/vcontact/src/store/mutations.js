export const state = {
  contactChunks: {
    a: [
      {
        _id: '1',
        name: '阿凡提',
        mobilePhone: '13818212338',
        nameFirstWordChr: 'a',
        nameAllWordChr: 'aft',
        corp: 'shgbit',
        mail: 'shgbit.com'
      }
    ],
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
}

export const mutations = {
  addTodo (state, { text }) {
    state.contactChunks.a.push({
      text,
      done: false
    })
  }
}
