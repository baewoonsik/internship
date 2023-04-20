<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">CLEAR ALL</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoStore } from "../store/index"

export default defineComponent({
    name: "TodoFooter",
    setup() {
        const todoStore = useTodoStore();

        // 할 일 목록을 모두 지우는 함수
        const clearTodo = () => {
            todoStore.clearTodo();
        };

        return {
            clearTodo,
        };
    },
});
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: black;
    margin: 0 auto;
}

.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>