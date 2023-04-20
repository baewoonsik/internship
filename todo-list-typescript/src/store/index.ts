import { defineStore } from "pinia";

export interface TodoItem {
  completed: boolean;
  item: string;
}

const storage = {
  fetch(): TodoItem[] {
    const arr: TodoItem[] = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== null) {
          arr.push(JSON.parse(localStorage.getItem(key)!) as TodoItem);
        }
      }
    }
    return arr;
  },
};

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todoItems: storage.fetch(),
  }),
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },
  actions: {
    addTodo(todoItem: string) {
      const obj: TodoItem = {
        completed: false,
        item: todoItem,
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },

    removeTodo({ todoItem, index }: { todoItem: TodoItem; index: number }) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },

    toggleComplete({ todoItem, index }: { todoItem: TodoItem; index: number }) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    clearTodo() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
});
