<template>
  <div class='container' style="margin-top:50px">
    <div class='row'>
      <div class='col-lg-4'>
        <h1>Contacts</h1>
      </div>
      <div class='col-lg-8'>
        <contactsPanel></contactsPanel>
      </div>
    </div>
  </div>
</template>

<script>
import contactsPanel from './contactsPanel.vue'

export default {
  name: 'index',
  data () {
    return {}
  },
  components: { contactsPanel }
}
</script>

<style scoped>

</style>
