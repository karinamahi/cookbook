<template>
    <h3>StepCard</h3>
</template>


<script>
import Vue from "vue";
import Vuetify from "vuetify";
 
Vue.use(Vuetify);
export default Vue.extend({
  data: function() {
    return {
      step: {
        name: "",
        items: []
      },
       errorMessages: '',
       formHasErrors: false
    };
  },

  computed: {
      form () {
        return {
          step: {}
        }
      }
    },
    watch: {
      name () {
        this.errorMessages = ''
      }
    },


    methods: {
     resetForm(){
       console.log('Reseting...');
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
     },
      submit(){
        console.log('Submiting: ', this.recipe, this.errorMessages);
        this.formHasErrors = false
        

        // Object.keys(this.form).forEach(f => {
        //   if (!this.form[f]) this.formHasErrors = true

        //   this.$refs[f].validate(true)
        // })
      }
    }
  
});
</script>