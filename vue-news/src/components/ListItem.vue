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
            <router-link
              v-bind:to="`/user/${item.user}`"
              class="user-name"
              v-if="item.user"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  created() {
    const name = this.$route.name;
    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASKS");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },

  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.asks;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
    },
  },
};
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
