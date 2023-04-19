<template>
  <header>
    <h1>{{ this.headerText }}</h1>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TodoHeader",

  computed: {
    ...mapState(["headerText"]),
  },
};
</script>

<style scoped>
header {
  padding: 10px;
  text-align: center;
}
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem;
}
</style>
