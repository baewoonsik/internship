<template>
  <div id="app">
    <HeaderToolBar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import HeaderToolBar from '../src/components/HeaderToolBar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    HeaderToolBar,
  },
})
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #2b7cff;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>