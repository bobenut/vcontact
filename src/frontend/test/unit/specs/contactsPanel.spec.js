import Vue from 'vue'
import contactsPanel from '@/components/contactsPanel'
import Hello from '@/components/Hello'

describe('contactsPanel.vue', () => {
  it('click new button', () => {
    const Constructor = Vue.extend(contactsPanel)
    const vm = new Constructor().$mount()    
    // const Constructor = Vue.extend(contactsPanel)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('#btnCreate').$emit('click', () => {
    //   console.log('emit click ok')
    // }))
    // expect(vm.$el.getElementById('#btnCreate')).toBe(null)
    // console.log('************* %s', JSON.stringify(vm.$el, null, 2))
    for (let i in vm.$el) {
      console.log('************* %s', i)
    }

    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
