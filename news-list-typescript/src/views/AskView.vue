<template>
    <div>
        <ListItem></ListItem>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '../components/ListItem.vue'

export default defineComponent({
    name: 'AskView',
    components: {
        ListItem
    },
})
</script>

<style></style>
