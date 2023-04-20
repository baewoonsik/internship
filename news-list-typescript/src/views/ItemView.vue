<template>
    <div>
        <section>
            <div class="user-container">
                <div><font-awesome-icon icon="fa-solid fa-user-secret" /></div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${item.user}`">
                        {{ item.user }}
                    </router-link>
                    <div class="time">
                        {{ item.time_ago }}
                    </div>
                </div>
            </div>
            <h2>{{ item.title }}</h2>
        </section>
        <section>
            <div v-html="item.content"></div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store/index'

export default defineComponent({
    name: 'ItemView',

    computed: {
        item() {
            return useStore().askDetail;
        }
    },

    created() {
        const id = this.$route.params.id as string;
        useStore().fetchDetailAsk(id);
    }
})
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user-secret {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>