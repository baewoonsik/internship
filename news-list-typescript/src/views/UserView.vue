<template>
    <div>
        <p>id : {{ user.id }}</p>
        <p>created_time : {{ user.created_time }}</p>
        <p>created : {{ user.created }}</p>
        <p>karma : {{ user.karma }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store/index'

export default defineComponent({
    name: 'UserView',

    computed: {
        user() {
            return useStore().userInfo;
        }
    },

    created() {
        const id = this.$route.params.id as string;
        useStore().fetchUserInfo(id);
    },
})
</script>

<style></style>
