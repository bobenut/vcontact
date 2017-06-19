<template>
  <div class='panel panel-default' style='min-width:500px;box-shadow:4px 4px 10px #888888;'>
    <contactsPanelHeader></contactsPanelHeader>
    <contactsPanelBody></contactsPanelBody>
  </div>
</template>

<script>
import contactsPanelHeader from './contactsPanelHeader.vue'
import contactsPanelBody from './contactsPanelBody.vue'

export default {
  name: 'contactsPanel',
  data () {
    return {}
  },
  components: { contactsPanelHeader, contactsPanelBody }
}
</script>

<style scoped>

</style>
