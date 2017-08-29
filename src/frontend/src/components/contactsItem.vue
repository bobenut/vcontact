<template>
  <tr>
    <td style='overflow:hidden'>
      <div style='float:left'>
          <div>{{contact.name}}</div>
          <div>{{contact.mobilePhone}}</div>
      </div>    
      <div style='float:right'>
          <div>
          <button type='button' class='btn btn-info glyphicon glyphicon-pencil'></button>
          <span> &nbsp;&nbsp;&nbsp;</span>
          <button type='button' class='btn btn-danger glyphicon glyphicon-remove'  @click="removeContact(contact)"></button>
          </div>
      </div>  
    </td>
  </tr>
</template>

<script>

export default {
  name: 'contactsItem',
  props: ['contact'],
  data () {
    return {}
  },
  methods: {
    removeContact (contact) {
      let confirmResult = confirm('delete this contactor?')
      if (!confirmResult) {
        return
      }

      this.$store.dispatch('removeContact', contact)
    }
  }
}
</script>

<style scoped>

</style>
