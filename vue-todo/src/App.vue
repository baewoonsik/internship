<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
    <!-- actions practice -->
    <div>{{ this.$store.state.user }}</div>
    <button v-on:click="setUser">Set User</button>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "app",

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },

  // actions practice
  methods: {
    setUser() {
      this.$store.dispatch("setUserData");
    },
  },
};
</script>

<style>
body {
  background-color: #f6f6f6;
  text-align: center;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shawdow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
