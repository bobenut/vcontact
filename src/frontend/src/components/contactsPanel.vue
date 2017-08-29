<template >
  <div class='panel panel-default' style='min-width:500px;box-shadow:4px 4px 10px #888888;'>
    <div class="panel-heading">
      <button id='btnCreate' @click="openContactCUDialogWithCreation">
        <span class="glyphicon glyphicon-plus"></span>
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
    </div>

    <div class="panel-body">  
      <div style='float: left;width:100%'>
        <contactsItems  v-for="(contacts, key) in contactChunks" v-if='contacts && contacts.length > 0' v-bind:contacts="contacts" v-bind:contactsChunkName="key"></contactsItems>
      </div>
    </div>
    <contactCUDialog></contactCUDialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import contactsItems from './contactsItems.vue'
import contactCUDialog from './contactCUDialog.vue'

export default {
  name: 'contactsPanel',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['contactChunks']),
    ...mapActions(['getAllContacts'])
  },
  components: { contactsItems, contactCUDialog },
  methods: {
    openContactCUDialogWithCreation () {
      this.$store.dispatch('openContactCUDialog', {cuMode: 'create', contact: {}})
    },
    openContactCUDialogWithUpdating (contact) {
      // console.log(JSON.stringify(contact))
      // this.$data.modificationConatct = Object.assign({}, contact)
      // this.showModificationContactDialog = true
    }
  },
  created () {
    this.$store.dispatch('getAllContacts')
  }
}
</script>

<style scoped>

</style>
