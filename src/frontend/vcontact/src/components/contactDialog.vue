<template>
  <transition name="modal">
    <div class="modal modal-mask" role="dialog" style="display: block">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
            <h4 class="modal-title" id="myModalLabel">contacts</h4>
          </div>
          
          <div class="modal-body">
            <slot name="dialogBody"></slot>
          </div>
          
          <div class="modal-footer">
            <slot name="dialogFooter"></slot>
          </div>
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'contactDialog',
  data () {
    return {}
  },
  computed: {},
  components: {},
  methods: {}
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
</style>
