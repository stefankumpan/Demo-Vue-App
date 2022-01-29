<template>
  <h1>{{ title }}</h1>
  <h2>{{ name }}</h2>
  <button @click="test()">Change</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OptionApi",
  data() {
    return {
      title: "OptionApi",
      name: "Max Placeholder",
    };
  },

  methods: {
    test() {
      this.name = "Joe Example";
    },
  },
});
</script>
