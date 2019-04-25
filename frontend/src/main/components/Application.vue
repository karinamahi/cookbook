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
         
        <v-layout row>
          <v-navigation-drawer
              v-model="drawer"
              :mini-variant.sync="mini"
              hide-overlay
              stateless
            >
              <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                  <v-list-tile avatar>
                    <v-list-tile-avatar>
                      <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-btn
                        icon
                        @click.stop="mini = !mini"
                      >
                        <v-icon>chevron_left</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-toolbar>

              <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  @click="test(item.title)"
                >
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <router :to="item.to"><v-list-tile-title>{{ item.title }}</v-list-tile-title></router>
                    
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>

            <v-card-text><router-view></router-view></v-card-text>          
        </v-layout> 
         

        </v-content>
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
      </v-app>
    </div>
    </body>
    </html>
</template>
 
<script>
import Vue from "vue";
import Vuetify from "vuetify";
import RecipeDetails from "./RecipeDetails.vue"
 
Vue.use(Vuetify);
export default Vue.extend({
  components: {
    RecipeDetails
  },
  data: function() {
  return {
      drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', to:"/" },
          { title: 'Recipe', icon: 'question_answer', to: "/recipe" }
        ],
        mini: true,
        right: null
    }
  },

  watch: {

    },

    methods: {
      test(title){
            if(title == 'Home'){
              console.log('Redirecting to home');
              this.$router.push({path: '/'});
              return;
            }
            this.$router.push({path:'recipe'});
          },
    }
  
});
</script>