<template>
  <div class='panel panel-default' style='min-width:500px;box-shadow:4px 4px 10px #888888;'>
    <div class="panel-heading">
      <button id='btnCreate' data-toggle="modal" data-target="#myModal">
        <span class="glyphicon glyphicon-plus"></span>
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <contactDialog id='myModal'></contactDialog>
    </div>

    <div class="panel-body">
      <div style='float: left;width:100%'>
        <contactsItmes v-for="(contacts, key) in contactChunks" v-bind:contacts="contacts" v-bind:contactsChunkName='key'></contactsItmes>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import contactsItmes from './contactsItmes.vue'
import contactDialog from './contactDialog.vue'

export default {
  name: 'contactsPanel',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['contactChunks']),
    ...mapActions(['getAllContacts'])
  },
  components: { contactsItmes, contactDialog },
  created () {
    this.$store.dispatch('getAllContacts')
  }
}
</script>

<style scoped>

</style>
