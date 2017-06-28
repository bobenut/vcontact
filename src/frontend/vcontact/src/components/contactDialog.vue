<template>
  <div class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">contacts</h4>
        </div>
        <form @submit.prevent="validate">
          <div class="modal-body">
            <div class='form-horizontal' role='form'>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>Name</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='name' type='text' placeholder='Name' v-model="name" v-validate="{ rules: { required: true, min: 2, max: 16 } }"/>
                    <div id="nameErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('name')">
                      <div>必须输入</div>
                      <div>字符为2-16个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>NameFirstWordChr</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='nameFirstWordChr' type='text' placeholder='NameFirstWordChr' v-model="nameFirstWordChr" v-validate="{ rules: { required: true, min: 1, max: 1 } }"/>
                    <div id="nameFirstWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('nameFirstWordChr')">
                      <div>必须输入</div>
                      <div>字符为1个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>NameAllWordChr</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='nameAllWordChr' type='text' placeholder='NameAllWordChr' v-model="nameAllWordChr" v-validate="{ rules: { required: true, min: 1, max: 10 } }"/>
                    <div id="nameAllWordChrErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('nameAllWordChr')">
                      <div>必须输入</div>
                      <div>字符为1-10个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>Corp</label>
                  <div class='col-sm-7'>
                    <input class='form-control' type='text' placeholder='Corp' v-model="corp"/>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'>Mobile Phone</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='mobilePhone' type='text' placeholder='Mobile Phone' v-model="mobilePhone" v-validate="{ rules: { required: true, min: 4, max: 20 } }"/>
                    <div id="mobilePhoneErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('mobilePhone')">
                      <div>必须输入</div>
                      <div>字符为4-20个</div>
                    </div>
                  </div>
              </div>
              <div class='form-group'>
                  <label class='col-sm-4 control-label'> Mail</label>
                  <div class='col-sm-7'>
                    <input class='form-control' name='mail' type='text' placeholder='Mail' v-model="mail" v-validate="{ rules: { required: true, mail: true } }"/>
                    <div id="mailErrorInfo" class="alert alert-danger" style='margin-top: 2px' v-show="errors.has('mail')">
                      <div>必须输入</div>
                      <div>必须是有效的邮件格式</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button id='btnCancel' class='btn btn-default' type='button'>Close</button>
            <button id='btnSave' class='btn btn-primary' type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactDialog',
  data () {
    return {
      name: '',
      nameFirstWordChr: '',
      nameAllWordChr: '',
      corp: '',
      mobilePhone: '',
      mail: ''
    }
  },
  computed: {},
  components: {},
  methods: {
    validate () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('From Submitted!');
        } else {
          // eslint-disable-next-line
          alert('Correct them errors!');
        }
      }).catch(() => {
          // eslint-disable-next-line
          alert('Correct them errors!');
      })
    },
    save () {

    }
  }
}
</script>

<style scoped>

</style>
