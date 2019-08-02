<template>
    <v-container fluid>
      <v-text-field
        ref="name"
        v-model="recipe.name"
        :rules="[() => !!recipe.name || 'This field is required']"
        :error-messages="errorMessages"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        ref="description"
        v-model="recipe.description"
        :error-messages="errorMessages"
        label="Description"
        required
      ></v-text-field>
    </v-container>
</template>

<style scoped>
  .v-text-field {
      font-size: 1.0em;
      padding: 0em;
      margin: 0em;
  }
  .container.grid-list-xl .layout .flex {
      padding: 0em;
      margin: 0.0em;
  }
</style>

<script>
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
export default Vue.extend({
  data: function() {
    return {
      recipe: {
        name: "",
        description: ""
      },
      errorMessages: "",
      formHasErrors: false
    };
  },

  computed: {
    form() {
      return {
        recipe: {}
      };
    }
  },
  watch: {
    name() {
      this.errorMessages = "";
    }
  },

  methods: {
    resetForm() {
      console.log("Reseting...");
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    submit() {
      console.log("Submiting: ", this.recipe, this.errorMessages);
      this.formHasErrors = false;

      // Object.keys(this.form).forEach(f => {
      //   if (!this.form[f]) this.formHasErrors = true

      //   this.$refs[f].validate(true)
      // })
    }
  }
});
</script>