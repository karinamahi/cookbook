<template>
    <div>
        <section>
          <v-layout>
            <v-flex xs12 sm12 md12 lg12>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field
                    ref="name"
                    v-model="recipe.name"
                    :rules="[() => !!recipe.name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    ref="description"
                    v-model="recipe.description"
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
      recipe: {
        name: "",
        description: ""
      },
       errorMessages: '',
       formHasErrors: false
    };
  },

  computed: {
      form () {
        return {
          recipe: {}
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