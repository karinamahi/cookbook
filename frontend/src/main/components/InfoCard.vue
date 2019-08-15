<template>
  <v-card :hover="hover" v-on:click="emitToPage" flat>
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
    emitToPage(event){
      console.log(`InfoCard: EmitToPage...`);
      this.$emit('componentClick', this.$data.mainData);
    }

  }
});
</script>
