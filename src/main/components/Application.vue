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
        <v-content>
          {{title}}
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
      title: "Hello"
    };
  }
});
</script>