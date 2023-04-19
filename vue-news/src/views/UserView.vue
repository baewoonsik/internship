<template>
  <div>
    <p>created_time : {{ fetchedUserInfo.created_time }}</p>
    <p>created : {{ fetchedUserInfo.created }}</p>
    <p>id : {{ fetchedUserInfo.id }}</p>
    <p>karma : {{ fetchedUserInfo.karma }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserView",
  computed: {
    ...mapGetters(["fetchedUserInfo"]),
  },

  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER_INFO", userName);
  },
};
</script>

<style></style>
