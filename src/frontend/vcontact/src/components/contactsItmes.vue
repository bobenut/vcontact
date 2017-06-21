<template>
  <table class='table' v-if='contacts && contacts.length > 0'>
      <thead>
          <tr>
              <th>{{ contactsChunkName | uppercase }}</th>
          </tr>    
      </thead>
      <tbody>
          <tr v-for="(contact, index) in contacts">
              <td style='overflow:hidden'>
                  <div style='float:left'>
                      <div>{{contact.name}}</div>
                      <div>{{contact.mobilePhone}}</div>
                  </div>    
                  <div style='float:right'>
                      <div>
                          <button type='button' class='btn btn-info glyphicon glyphicon-pencil'></button>
                          <span> &nbsp;&nbsp;&nbsp;</span>
                          <button type='button' class='btn btn-danger glyphicon glyphicon-remove'></button>
                      </div>
                  </div>    
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>

export default {
  name: 'contactsItmes',
  props: ['contacts', 'contactsChunkName'],
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
