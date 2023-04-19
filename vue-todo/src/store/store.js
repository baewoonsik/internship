import { createStore } from "vuex";
import axios from "axios";

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

export default createStore({
  state: {
    headerText: "TODO LIST WITH VUEX",
    user: [],
    todoItems: storage.fetch(),
  },

  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },

  mutations: {
    addTodo(state, todoItem) {
      const obj = {
        completed: false,
        item: todoItem,
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },

    removeTodo(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },

    toggleComplete(state, payload) {
      state.todoItems[payload.index].completed =
        !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },

    clearTodo(state) {
      localStorage.clear();
      state.todoItems = [];
    },

    // actions practice
    setUser(state, user) {
      state.user = user;
    },
  },

  // actions practice
  actions: {
    async setUserData(context) {
      return await axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          console.log(response.data);
          context.commit("setUser", response.data);
        });
    },
  },
});
