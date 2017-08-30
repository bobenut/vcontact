<template >
  <div class='panel panel-default' style='min-width:500px;box-shadow:4px 4px 10px #888888;'>
    <div class="panel-heading" style='overflow: hidden'>
      <button id='btnCreate' @click="openContactCUDialogWithCreation" style='float:left'>
        <span class="glyphicon glyphicon-plus"></span>
      </button>
      <input class='form-control' type='text' placeholder='search by name' style='float:right;width:200px' v-model='searchCondition'/>
      
    </div>

    <div class="panel-body">  
      <div style='float: left;width:100%'>
        <contactsItems  v-for="(contacts, key) in computedContactChunks" v-if='contacts && contacts.length > 0' v-bind:contacts="contacts" v-bind:contactsChunkName="key"></contactsItems>
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
    return {
      searchCondition: ''
    }
  },
  computed: {
    ...mapGetters(['contactChunks']),
    ...mapActions(['getAllContacts']),
    computedContactChunks () {
      console.log('computed1: %s', this.searchCondition)
      if (!this.searchCondition) {
        return this.contactChunks
      }

      let searchedResult = {}
      console.log('computed2: %s', this.searchCondition)
      for (let chrunckName in this.contactChunks) {
        let chrunck = this.contactChunks[chrunckName]
        for (let i = 0; i < chrunck.length; i++) {
          let contact = chrunck[i]
          let searchResult = contact.name.search(new RegExp(this.searchCondition, 'i'))
          if (searchResult >= 0) {
            searchedResult[chrunckName] ? searchedResult[chrunckName] : searchedResult[chrunckName] = []
            searchedResult[chrunckName].push(contact)
          }
        }
      }

      return searchedResult
    }
  },
  components: { contactsItems, contactCUDialog },
  methods: {
    openContactCUDialogWithCreation () {
      this.$store.dispatch('openContactCUDialog', {cuMode: 'create', contact: {}})
    }
  },
  created () {
    this.$store.dispatch('getAllContacts')
  }
}
</script>

<style scoped>

</style>
