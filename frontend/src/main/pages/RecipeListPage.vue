<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 sm12 md12 v-for="recipe in recipes" :key="recipe.name">
        <info-card
          v-on:componentClick="getDetails"
          :componentData="recipe"
          :icon="recipe.icon"
          :iconColor="recipe.iconColor"
        ></info-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from "vue";
import InfoCard from "./../components/InfoCard.vue";
export default Vue.extend({
  components: {
    InfoCard
  },
  data: function() {
    return {
      recipes: [
        {
          id: "1",
          name: "Bolo de Laranja",
          description: "Uma receita especial.",
          icon: "nfc",
          iconColor: "primary"
        },
        {
          id: "2",
          name: "Bolo de Chocolate",
          description: "Uma receita especial.",
          icon: "nfc",
          iconColor: "primary"
        },
        {
          id: "3",
          name: "Bolo de Limão",
          description: "Uma receita especial.",
          icon: "nfc",
          iconColor: "primary"
        }
      ]
    };
  },
  methods: {
    getDetails: function(recipe) {
      console.log(`Chamou getDetails: ${JSON.stringify(recipe)}`);
      this.$router.push({ path: `/recipe/${recipe.id}/details` });
    }
  }
});
</script>