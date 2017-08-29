<template>
  <div  v-if="dialogIsOpen">
    <transition name="modal">
      <div class="modal modal-mask" role="dialog" style="display: block">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form @submit.prevent="validateForm">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">contacts</h4>
              </div>
              
              <div class="modal-body">
                <div class='form-horizontal' role='form'>
                  <div class='form-group'>
                      <label class='col-sm-4 control-label'>Name</label>
                      <div class='col-sm-7'>
                        <input class='form-control' name='name' type='text' placeholder='Name' v-model="contact.name" v-validate="{ rules: { required: true, min: 2, max: 16 } }"/>
                        <div id="nameErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('name')">
                          <div>必须输入</div>
                          <div>字符为2-16个</div>
                        </div>
                      </div>
                  </div>
                  <div class='form-group'>
                      <label class='col-sm-4 control-label'>NameFirstWordChr</label>
                      <div class='col-sm-7'>
                        <input class='form-control' name='nameFirstWordChr' type='text' placeholder='NameFirstWordChr' v-model="contact.nameFirstWordChr" v-validate="{ rules: { required: true, min: 1, max: 1 } }"/>
                        <div id="nameFirstWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('nameFirstWordChr')">
                          <div>必须输入</div>
                          <div>字符为1个</div>
                        </div>
                      </div>
                  </div>
                  <div class='form-group'>
                      <label class='col-sm-4 control-label'>NameAllWordChr</label>
                      <div class='col-sm-7'>
                        <input class='form-control' name='nameAllWordChr' type='text' placeholder='NameAllWordChr' v-model="contact.nameAllWordChr" v-validate="{ rules: { required: true, min: 1, max: 10 } }"/>
                        <div id="nameAllWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('nameAllWordChr')">
                          <div>必须输入</div>
                          <div>字符为1-10个</div>
                        </div>
                      </div>
                  </div>
                  <div class='form-group'>
                      <label class='col-sm-4 control-label'>Corp</label>
                      <div class='col-sm-7'>
                        <input class='form-control' type='text' placeholder='Corp' v-model="contact.corp"/>
                      </div>
                  </div>
                  <div class='form-group'>
                      <label class='col-sm-4 control-label'>Mobile Phone</label>
                      <div class='col-sm-7'>
                        <input class='form-control' name='mobilePhone' type='text' placeholder='Mobile Phone' v-model="contact.mobilePhone" v-validate="{ rules: { required: true, min: 4, max: 20 } }"/>
                        <div id="mobilePhoneErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('mobilePhone')">
                          <div>必须输入</div>
                          <div>字符为4-20个</div>
                        </div>
                      </div>
                  </div>
                  <div class='form-group'>
                      <label class='col-sm-4 control-label'> Mail</label>
                      <div class='col-sm-7'>
                        <input class='form-control' name='mail' type='text' placeholder='Mail' v-model="contact.mail" v-validate="{ rules: { required: true, email: true } }"/>
                        <div id="mailErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('mail')">
                          <div>必须输入</div>
                          <div>必须是有效的邮件格式</div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              
              <div class="modal-footer">
                <button id='btnCancel' class='btn btn-default' type='button' @click="closeContactCUDialog()">Close</button>
                <button id='btnSave' class='btn btn-primary' type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'contactDialog',
  data () {
    return {
      dialogIsOpen: false,
      dialogOpenCUMode: '',
      contact: {
        name: '',
        nameFirstWordChr: '',
        nameAllWordChr: '',
        corp: '',
        mobilePhone: '',
        mail: ''
      }
    }
  },
  computed: {},
  methods: {
    validateForm () {
      this.$validator.validateAll().then((result) => {
        const saveActions = {
          create: {
            actionName: 'saveNewContact',
            task: {
              success: () => {
                alert('saved new contact')
                this.$store.dispatch('closeContactCUDialog', { cuMode: this.dialogOpenCUMode })
              }
            }
          },
          update: {
            actionName: 'saveUpdatedContact',
            task: {
              success: () => {
                alert('saved Updated contact')
                this.$store.dispatch('closeContactCUDialog', { cuMode: this.dialogOpenCUMode })
              }
            }
          }
        }

        if (result) {
          console.log('validate new contact\'s inputs ok')
          console.log('new contact\'s inputs: %s', JSON.stringify(this.contact, null, 2))
          saveActions[this.dialogOpenCUMode].task.data = this.contact
          this.$store.dispatch(saveActions[this.dialogOpenCUMode].actionName, saveActions[this.dialogOpenCUMode].task)
        } else {
          console.log('validate new contact\'s inputs invalid')
        }
      }).catch((err) => {
        console.log('validate new contact\'s inputs error: ' + err.message)
      })
    },
    closeContactCUDialog () {
      this.$store.dispatch('closeContactCUDialog', { cuMode: this.dialogOpenCUMode })
    }
  },
  created () {
    this.$store.watch(state => {
      this.dialogIsOpen = state.contacts.contactCUDialogIsOpen
      this.dialogOpenCUMode = state.contacts.contactCUDialogOpenCUMode

      this.contact.name = state.contacts.contactCUDialogData ? state.contacts.contactCUDialogData.name || '' : ''
      this.contact.nameFirstWordChr = state.contacts.contactCUDialogData ? state.contacts.contactCUDialogData.nameFirstWordChr || '' : ''
      this.contact.nameAllWordChr = state.contacts.contactCUDialogData ? state.contacts.contactCUDialogData.nameAllWordChr || '' : ''
      this.contact.corp = state.contacts.contactCUDialogData ? state.contacts.contactCUDialogData.corp || '' : ''
      this.contact.mobilePhone = state.contacts.contactCUDialogData ? state.contacts.contactCUDialogData.mobilePhone || '' : ''
      this.contact.mail = state.contacts.contactCUDialogData ? state.contacts.contactCUDialogData.mail || '' : ''

      if (this.dialogIsOpen) {
        console.log('open dialog')
      } else {
        console.log('close dialog')
      }
    },
    () => {
      alert('open/close watch calback')
    })
  }
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
