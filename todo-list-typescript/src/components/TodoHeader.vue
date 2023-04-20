<template>
    <header>
        <h1>TODO LIST</h1>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TodoHeader',
})
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