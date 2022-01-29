<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/layouts/Layout.vue";

export default defineComponent({
  name: "App",
  components: { Layout },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap");
@import "./assets/styles/variables.css";
</style>
