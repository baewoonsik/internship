<template>
  <div>
    <section>
      <div class="user-container">
        <div><font-awesome-icon icon="fa-solid fa-user-secret" /></div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${fetchedAskDetail.user}`">
            {{ fetchedAskDetail.user }}
          </router-link>
          <div class="time">
            {{ fetchedAskDetail.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedAskDetail.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedAskDetail.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemView",
  computed: {
    ...mapGetters(["fetchedAskDetail"]),
  },

  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_DETAIL_ASK", itemId);
  },
};
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
