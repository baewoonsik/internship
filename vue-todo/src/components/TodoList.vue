<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.getTodoItems"
        :key="todoItem.item"
        class="shadow"
      >
        <span
          class="checkBtn"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete({ todoItem, index })"
        >
          <font-awesome-icon icon="fa-solid fa-check" />
        </span>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" @click="removeTodo({ todoItem, index })">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoList",

  methods: {
    ...mapMutations({
      removeTodo: "removeTodo",
      toggleComplete: "toggleComplete",
    }),
  },

  computed: {
    ...mapGetters(["getTodoItems"]),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 10px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
