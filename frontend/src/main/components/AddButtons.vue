<template>
  <v-card id="create">
    <v-container fluid grid-list-md>
      <v-layout child-flex wrap>
        <v-flex>
          <v-speed-dial
            v-model="fab"
            top
            right
            absolute
            direction="left"
            open-on-hover
            transition="slide-y-reverse-transition"
          >
            <template v-slot:activator>
              <v-btn v-model="fab" color="blue darken-2" dark fab>
                <v-icon>account_circle</v-icon>
                <v-icon>close</v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="green">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="indigo">
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn fab dark small color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-speed-dial>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    fab: false,
    fling: false,
    tabs: null,
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },
};
</script>