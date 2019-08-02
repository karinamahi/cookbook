<template>
  <v-app id="app" light>
    <v-content>
      <v-toolbar class="white" flat>
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card flat>
        <v-layout row>
          <v-navigation-drawer v-model="drawer" hide-overlay stateless>
            <v-toolbar flat class="transparent">
              <v-list class="pa-0">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Ka</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-toolbar>

            <v-list class="pt-0" dense>
              <v-list-tile v-for="item in items" :key="item.title" @click="test(item.title)">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <router :to="item.to">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </router>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>

          <v-container grid-list-xl>
            <router-view></router-view>
          </v-container>
        </v-layout>
      </v-card>
    </v-content>
  </v-app>
</template>
 
<script>
import Vue from "vue";
import Vuetify from "vuetify";
import RecipeDetails from "./RecipeDetails.vue";

Vue.use(Vuetify);
export default Vue.extend({
  components: {
    RecipeDetails
  },
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
    test(title) {
      if (title == "Home") {
        console.log("Redirecting to home");
        this.$router.push({ path: "/" });
        return;
      }
      this.$router.push({ path: "recipe" });
    }
  }
});
</script>