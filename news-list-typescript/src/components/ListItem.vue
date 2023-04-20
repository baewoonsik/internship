<template>
    <div>
        <ul class="item-list">
            <li v-for="item in listItems" :key="item.id" class="post">
                <div>
                    <p class="item-title">
                        <!-- 각 화면에 나타나는 데이터가 다르기 때문에 v-if 로 분기처리 -->
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`item/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="user-text">
                        <!-- 각 화면에 나타나는 데이터가 다르기 때문에 v-if 로 분기처리 -->
                        {{ item.time_ago }} by
                        <router-link v-bind:to="`/user/${item.user}`" class="user-name" v-if="item.user">
                            {{ item.user }}
                        </router-link>
                        <a :href="item.url" v-else>{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useStore } from '../store/index'

export default defineComponent({
    name: 'ListItem',

    created() {
        const name = this.$route.name
        const store = useStore()
        if (name === 'news') {
            store.fetchNews()
        } else if (name === 'ask') {
            store.fetchAsks()
        } else if (name === 'jobs') {
            store.fetchJobs()
        }
    },

    computed: {
        listItems() {
            const name = this.$route.name
            const store = useStore()
            if (name === 'news') {
                return store.news
            } else if (name === 'ask') {
                return store.asks
            } else if (name === 'jobs') {
                return store.jobs
            }
        }
    },
})
</script>

<style scoped>
.item-list {
    padding: 0;
    margin: 0;
}

.post {
    list-style-type: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 0.5rem;
}

.item-title {
    margin: 0;
}

.user-text {
    color: #aaa;
}

.user-name {
    color: black;
}

.user-name:hover {
    color: #42b883;
    text-decoration: underline;
}
</style>