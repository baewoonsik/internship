<template>
    <div class="header">
        <!-- 라우터 링크를 이용한 메뉴 구성 -->
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderToolBar',
})


</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}

/* 현재 활성화된 라우터 링크 스타일 */
.header .router-link-exact-active {
    color: #35495e;
}

/* 라우터 링크 스타일 */
.header a {
    color: white;
}
</style>