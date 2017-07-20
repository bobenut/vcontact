<template>
  <div class='panel panel-default' style='min-width:500px;box-shadow:4px 4px 10px #888888;'>
    <div class="panel-heading">
      <button id='btnCreate' @click='openNewContactDialog()'>
        <span class="glyphicon glyphicon-plus"></span>
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <form @submit.prevent="validateForm('form1')" :data-vv-scope="form1">
        <contactDialog v-if="showNewContactDialog">
          <div slot="dialogBody">
            <div class='form-horizontal' role='form'>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>Name</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='name' type='text' placeholder='Name' data-vv-name='form1.name' v-model="newContact.name" v-validate="{ rules: { required: true, min: 2, max: 16 } }"/>
                    <div id="nameErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form1.name')">
                      <div>必须输入</div>
                      <div>字符为2-16个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>NameFirstWordChr</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='nameFirstWordChr' type='text' placeholder='NameFirstWordChr' data-vv-name='form1.nameFirstWordChr' v-model="newContact.nameFirstWordChr" v-validate="{ rules: { required: true, min: 1, max: 1 } }"/>
                    <div id="nameFirstWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form1.nameFirstWordChr')">
                      <div>必须输入</div>
                      <div>字符为1个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>NameAllWordChr</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='nameAllWordChr' type='text' placeholder='NameAllWordChr' data-vv-name='form1.nameAllWordChr' v-model="newContact.nameAllWordChr" v-validate="{ rules: { required: true, min: 1, max: 10 } }"/>
                    <div id="nameAllWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form1.nameAllWordChr')">
                      <div>必须输入</div>
                      <div>字符为1-10个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>Corp</label>
                  <div class='col-sm-7'>
                    <input class='form-control' type='text' placeholder='Corp' v-model="newContact.corp"/>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>Mobile Phone</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='mobilePhone' type='text' placeholder='Mobile Phone' data-vv-name='form1.mobilePhone' v-model="newContact.mobilePhone" v-validate="{ rules: { required: true, min: 4, max: 20 } }"/>
                    <div id="mobilePhoneErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form1.mobilePhone')">
                      <div>必须输入</div>
                      <div>字符为4-20个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'> Mail</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='mail' type='text' placeholder='Mail' data-vv-name='form1.mail' v-model="newContact.mail" v-validate="{ rules: { required: true, email: true } }"/>
                    <div id="mailErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form1.mail')">
                      <div>必须输入</div>
                      <div>必须是有效的邮件格式</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div slot="dialogFooter">
            <button id='btnCancel' class='btn btn-default' type='button' @click="closeNewContactDialog()">Close</button>
            <button id='btnSave' class='btn btn-primary' type="submit">Save</button>
          </div>
        </contactDialog>
      </form>
    </div>

    <div class="panel-body">
      <div style='float: left;width:100%'>
        <table class='table'  v-for="(contacts, key) in contactChunks" v-if='contacts && contacts.length > 0'>
          <thead>
            <tr>
              <th>{{ key | uppercase }}</th>
            </tr>    
          </thead>
          <tbody>
            <contactsItem v-for="contact in contacts" v-bind:contact="contact">
              <span slot="itemModify">
                <button type='button' class='btn btn-info glyphicon glyphicon-pencil' @click="openModificationContactDialog(contact)"></button>
              </span>
            </contactsItem>
          </tbody>
        </table>
        <form @submit.prevent="validateForm('form2')"  :data-vv-scope="form2">
          <contactDialog v-if="showModificationContactDialog">
            <div slot="dialogBody">
              <div class='form-horizontal' role='form'>
                <div class='form-group'>
                    <label class='col-sm-4 control-label'>Name</label>
                    <div class='col-sm-7'>
                      <input class='form-control' name='name' type='text' placeholder='Name' data-vv-name='form2.name' v-model="modificationConatct.name" v-validate="{ rules: { required: true, min: 2, max: 16 } }"/>
                      <div id="nameErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form2.name')">
                        <div>必须输入</div>
                        <div>字符为2-16个</div>
                      </div>
                    </div>
                </div>
                <div class='form-group'>
                    <label class='col-sm-4 control-label'>NameFirstWordChr</label>
                    <div class='col-sm-7'>
                      <input class='form-control' name='nameFirstWordChr' type='text' placeholder='NameFirstWordChr' data-vv-name='form2.nameFirstWordChr' v-model="modificationConatct.nameFirstWordChr" v-validate="{ rules: { required: true, min: 1, max: 1 } }"/>
                      <div id="nameFirstWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form2.nameFirstWordChr')">
                        <div>必须输入</div>
                        <div>字符为1个</div>
                      </div>
                    </div>
                </div>
                <div class='form-group'>
                    <label class='col-sm-4 control-label'>NameAllWordChr</label>
                    <div class='col-sm-7'>
                      <input class='form-control' name='nameAllWordChr' type='text' placeholder='NameAllWordChr' data-vv-name='form2.nameAllWordChr' v-model="modificationConatct.nameAllWordChr" v-validate="{ rules: { required: true, min: 1, max: 10 } }"/>
                      <div id="nameAllWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form2.nameAllWordChr')">
                        <div>必须输入</div>
                        <div>字符为1-10个</div>
                      </div>
                    </div>
                </div>
                <div class='form-group'>
                    <label class='col-sm-4 control-label'>Corp</label>
                    <div class='col-sm-7'>
                      <input class='form-control' type='text' placeholder='Corp' v-model="modificationConatct.corp"/>
                    </div>
                </div>
                <div class='form-group'>
                    <label class='col-sm-4 control-label'>Mobile Phone</label>
                    <div class='col-sm-7'>
                      <input class='form-control' name='mobilePhone' type='text' placeholder='Mobile Phone' data-vv-name='form2.mobilePhone' v-model="modificationConatct.mobilePhone" v-validate="{ rules: { required: true, min: 4, max: 20 } }"/>
                      <div id="mobilePhoneErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form2.mobilePhone')">
                        <div>必须输入</div>
                        <div>字符为4-20个</div>
                      </div>
                    </div>
                </div>
                <div class='form-group'>
                    <label class='col-sm-4 control-label'> Mail</label>
                    <div class='col-sm-7'>
                      <input class='form-control' name='mail' type='text' placeholder='Mail'  data-vv-name='form2.mail' v-model="modificationConatct.mail" v-validate="{ rules: { required: true, email: true } }"/>
                      <div id="mailErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('form2.mail')">
                        <div>必须输入</div>
                        <div>必须是有效的邮件格式</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div slot="dialogFooter">
              <button id='btnCancel' class='btn btn-default' type='button' @click="closeModificationContactDialog()">Close</button>
              <button id='btnSave' class='btn btn-primary' type="submit">Save</button>
            </div>
          </contactDialog>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import contactsItmes from './contactsItmes.vue'
import contactsItem from './contactsItem.vue'
import contactDialog from './contactDialog.vue'

export default {
  name: 'contactsPanel',
  data () {
    return {
      newContact: {
        name: '',
        nameFirstWordChr: '',
        nameAllWordChr: '',
        corp: '',
        mobilePhone: '',
        mail: ''
      },
      modificationConatct: {
        name: '',
        nameFirstWordChr: '',
        nameAllWordChr: '',
        corp: '',
        mobilePhone: '',
        mail: ''
      },
      showNewContactDialog: false,
      showModificationContactDialog: false
    }
  },
  computed: {
    ...mapGetters(['contactChunks']),
    ...mapActions(['getAllContacts'])
  },
  components: { contactsItmes, contactDialog, contactsItem },
  methods: {
    validateForm (scope) {
      let scopeToSaveFun = {
        form1: this.saveNew,
        form2: this.saveModified
      }

      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          console.log('validate new contact\'s inputs ok')
          console.log('new contact\'s inputs: %s', JSON.stringify(this.$data.newContact, null, 2))
          scopeToSaveFun[scope]()
        } else {
          console.log('validate new contact\'s inputs error')
        }
      }).catch(() => {
        console.log('validate new contact\'s inputs error')
      })
    },
    saveNew () {
      this.$store.dispatch('saveNewContact', {
        data: this.$data.newContact,
        completed: () => {
          console.log('saved new contact')
          this.closeNewContactDialog()
        }
      })
    },
    saveModified () {
      this.$store.dispatch('saveModifiedContact', {
        data: this.$data.modificationConatct,
        completed: () => {
          console.log('saved Modified contact')
          this.closeModificationContactDialog()
        }
      })
    },
    openNewContactDialog () {
      this.showNewContactDialog = true
    },
    closeNewContactDialog () {
      this.showNewContactDialog = false
    },
    openModificationContactDialog (contact) {
      console.log(JSON.stringify(contact))
      this.$data.modificationConatct = Object.assign({}, contact)
      this.showModificationContactDialog = true
    },
    closeModificationContactDialog () {
      this.showModificationContactDialog = false
    }
  },
  created () {
    this.$store.dispatch('getAllContacts')
  }
}
</script>

<style scoped>

</style>
