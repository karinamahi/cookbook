<template>
  <v-app id="app" light>
    <v-content>
      <v-toolbar class="white" flat>
        <v-toolbar-title></v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card flat>
        <v-layout row>
          <v-navigation-drawer height="700px" v-model="drawer" permanent>
            <v-list dense>
              <v-list-tile v-for="item in items" :key="item.title" @click="changePage(item)">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <div :to="item.to">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </div>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>

           <v-layout column>
            <router-view></router-view>
           </v-layout>

        </v-layout>
      </v-card>
    </v-content>
  </v-app>
</template>
 
<script>
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
export default Vue.extend({

  data: function() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard", to: "/" },
        { title: "Recipe", icon: "question_answer", to: "/recipe" }
      ],
      mini: true,
      right: null
    };
  },

  watch: {},

  methods: {
    changePage(item) {
      this.$router.push({ path: item.to });
    }
  }
});
</script>