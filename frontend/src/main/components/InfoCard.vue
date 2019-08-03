<template>
  <v-card :hover="hover" @click="getDetails(mainData.id)" flat>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12 sm4 md1>
          <v-card elevation="0">
            <v-btn fab dark color="black" depressed>
              <v-icon class="text--lighten-3" :color="iconColor" size="40">{{icon}}</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex xs12 sm8 md11>
          <v-card elevation="0">
            <div class="headline">{{mainData.name}}</div>
            <span class="text--secondary">{{mainData.description}}</span>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions sm-12>
      <!-- <v-btn class="grey--text" flat>See more</v-btn> -->
    </v-card-actions>
  </v-card>
</template>
 
<script>
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
export default Vue.extend({
  props: {
    componentData: Object,
    hover: Boolean,
    icon: String,
    iconColor: String
  },
  mounted: function() {
    this.$data.mainData = this.componentData || {};
  },
  data: function() {
    return {
      mainData: {}
    };
  },
  methods: {
    getDetails: function(projectId) {
      console.log("Chamou getDetails..." + projectId);
      this.$router.push({ path: `/projects/${projectId}/details` });
    }
  }
});
</script>
