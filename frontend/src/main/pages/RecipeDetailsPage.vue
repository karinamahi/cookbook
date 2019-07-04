<template>
    <div>
        <h1>Oi Page</h1>
        <recipe-details></recipe-details>

        
        <v-container>
          <h2>Aqui fica a lista de coisas</h2>
          <stuff-card></stuff-card>
        </v-container>

        <v-container>
          <h2>Aqui ficam as etapas</h2>
          <step-card></step-card>
        </v-container>
    </div>
</template>

<script>
import Vue from 'vue'
import RecipeDetails from "./../components/RecipeDetails.vue"
import StepCard from "./../components/StepCard.vue"
import StuffCard from "./../components/StuffCard.vue"

export default Vue.extend({
    components: {
        RecipeDetails, StepCard, StuffCard
    },
    data: function(){
      return {
        tabs: null,
        labels: ["RecipeDetails", "Settings", "About"],
        current: "RecipeDetails",
          
      };
  },
  methods: {
      setCurrent(label) {
        this.current = label;
      }
  }
});
</script>