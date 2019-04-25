<template>
    <div>
        <recipe-details></recipe-details>
        <h1>Oi Page</h1>
    </div>
</template>

<script>
import Vue from 'vue'
import RecipeDetails from "./../components/RecipeDetails.vue"

export default Vue.extend({
    components: {
        RecipeDetails
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