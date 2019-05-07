<template>
    <div>
        <section>
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    ref="description"
                    v-model="description"
                    :error-messages="errorMessages"
                    label="Description"
                    required
                  ></v-text-field>
                  
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions>
                  <v-btn flat>Cancel</v-btn>
                  <v-spacer></v-spacer>
                  <v-slide-x-reverse-transition>
                    <v-tooltip
                      v-if="formHasErrors"
                      left
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          class="my-0"
                          @click="resetForm"
                          v-on="on"
                        >
                          <v-icon>refresh</v-icon>
                        </v-btn>
                      </template>
                      <span>Refresh form</span>
                    </v-tooltip>
                  </v-slide-x-reverse-transition>
                  <v-btn color="primary" flat @click="submit">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>

        </section>
    </div>
</template>


<script>
import Vue from "vue";
import Vuetify from "vuetify";
 
Vue.use(Vuetify);
export default Vue.extend({
  data: function() {
    return {
      name: "",
      description: "",
       errorMessages: '',
       formHasErrors: false
    };
  },

  computed: {
      form () {
        return {
          name: this.name,
          description: this.description,
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
        console.log('Submiting...');
        this.formHasErrors = false
        

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      }
    }
  
});
</script>