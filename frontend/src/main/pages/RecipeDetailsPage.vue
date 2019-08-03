<template>
  <div>
    
      <info-card :componentData="recipe" :icon="recipe.icon" :iconColor="recipe.iconColor"></info-card>
    



  </div>
</template>

<script>
import Vue from "vue";
import InfoCard from "./../components/InfoCard.vue"
export default Vue.extend({
  components: {
   InfoCard
  },
  data: function() {
    return {
      labels: ["RecipeDetails", "Settings", "About"],
      current: "RecipeDetails",
      recipe: {
        name: "Bolo de Laranja",
        description: "Uma receita especial.",
        icon: "nfc",
        iconColor: "primary"
      }
    };
  },
  methods: {
  
  }
});
</script>