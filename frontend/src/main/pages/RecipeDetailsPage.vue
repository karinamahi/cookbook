<template>
  <div>
    <section>
      <v-layout>
        <v-flex xs12 sm12 md12 lg12>
          <v-card ref="form">
            <recipe-details></recipe-details>

            <v-divider class="mt-5"></v-divider>

            <add-buttons/>

            <v-container>
              <h2>Aqui fica a lista de coisas</h2>
              <stuff-card></stuff-card>
            </v-container>

            <v-divider class="mt-5"></v-divider>
            <v-container>
              <h2>Aqui ficam as etapas</h2>
              <step-card></step-card>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    

    <v-card-actions>
      <v-btn flat>Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-slide-x-reverse-transition>
        <v-tooltip v-if="formHasErrors" left>
          <template v-slot:activator="{ on }">
            <v-btn icon class="my-0" @click="resetForm" v-on="on">
              <v-icon>refresh</v-icon>
            </v-btn>
          </template>
          <span>Refresh form</span>
        </v-tooltip>
      </v-slide-x-reverse-transition>
      <v-btn color="primary" flat @click="submit">Submit</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import Vue from "vue";
import RecipeDetails from "./../components/RecipeDetails.vue";
import StepCard from "./../components/StepCard.vue";
import StuffCard from "./../components/StuffCard.vue";
import AddButtons from "./../components/AddButtons.vue"

export default Vue.extend({
  components: {
    RecipeDetails,
    StepCard,
    StuffCard,
    AddButtons
  },
  data: function() {
    return {
      tabs: null,
      labels: ["RecipeDetails", "Settings", "About"],
      current: "RecipeDetails"
    };
  },
  methods: {
    setCurrent(label) {
      this.current = label;
    }
  }
});
</script>