<template>
  <div class="inputBox shadow">
    <!-- 할 일 입력창 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- 할 일 추가 버튼 -->
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon icon="fa-solid fa-plus" class="addBtn" />
    </span>
    <!-- 할 일 추가 실패 모달 -->
    <TodoModal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        Error!
        <!-- 모달 닫기 버튼 -->
        <font-awesome-icon icon="fa-solid fa-xmark" class="closeModalBtn" v-on:click="showModal = false" />
      </template>
      <template v-slot:body> Todo item cannot be empty </template>
      <template v-slot:footer> Write your todo! </template>
    </TodoModal>
  </div>
</template>

<script>
import TodoModal from "./common/TodoModal.vue";

export default {
  name: "TodoInput",

  data() {
    return {
      // 새로운 할 일 입력값
      newTodoItem: "",
      // 모달 표시 여부
      showModal: false,
    };
  },

  methods: {
    // 할 일 추가 함수
    addTodo() {
      if (this.newTodoItem !== "") {
        // 할 일 추가
        this.$store.commit("addTodo", this.newTodoItem);
        // 입력창 초기화
        this.clearInput();
      } else {
        // 할 일 추가 실패 모달 표시
        this.showModal = !this.showModal;
      }
    },

    // 입력창 초기화 함수
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    TodoModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  border-style: none;
  color: white;
  vertical-align: middle;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

.closeModalBtn {
  color: #42b983;
  float: right;
}
</style>
