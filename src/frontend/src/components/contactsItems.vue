<template>
  <table class='table'>
    <thead>
      <tr>
        <th>{{ contactsChunkName | uppercase }}</th>
      </tr>    
    </thead>
    <tbody>
      <contactsItem v-for="(contact, index) in contacts" v-bind:contact="contact"></contactsItem>
    </tbody>
  </table>
</template>

<script>
import contactsItem from './contactsItem.vue'

export default {
  name: 'contactsItmes',
  props: ['contacts', 'contactsChunkName'],
  components: { contactsItem },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
