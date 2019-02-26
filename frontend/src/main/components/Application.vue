<template>
    <html>
    <head>
      <title>My App</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
      <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
    </head>
    <body>
    <div id="app">
      <v-app light>
        <v-toolbar class="white">
          <v-toolbar-title v-text="title"></v-toolbar-title>
        </v-toolbar>
        <v-content>
          

        <v-stepper v-model="e1" vertical>
      
        <template v-for="n in steps">
          <v-stepper-step
            :complete="e1 > n"
            :key="`${n}-step`"
            :step="n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>
        </template>
      

      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
        >
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="nextStep(n)"
          >
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

          <v-footer class="blue darken-2">
            <v-layout row wrap align-center>
              <v-flex xs12>
                <div class="white--text ml-3">
                  Made with
                  <v-icon class="red--text">favorite</v-icon>
                  by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                  and <a class="white--text" href="https://github.com/karinamahi">Karina Hirata</a>
                </div>
              </v-flex>
            </v-layout>
          </v-footer>
        </v-content>

      </v-app>
    </div>
    </body>
    </html>
</template>
 
<script>
import Vue from "vue";
import Vuetify from "vuetify";
 
Vue.use(Vuetify);
export default Vue.extend({
  data: function() {
    return {
      title: "Hello",
      e6: 1,
      steps: 5
    };
  },

  watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      }
    },

    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      }
    }
  
});
</script>