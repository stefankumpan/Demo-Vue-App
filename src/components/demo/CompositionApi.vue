<template>
  <div class="Setup">
    <h1>{{ title }}</h1>
    <h2>{{ fullName }}</h2>
    <p>{{ lastName }}</p>
    <button @click="test()">Change</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from "vue";

export default defineComponent({
  setup() {
    const title = "Setup";
    const firstName = ref("Stan");
    const lastName = reactive({ name: "Max" });

    const fullName = computed(() => firstName.value + " " + lastName.name);

    const test = () => {
      firstName.value = "Joe";
      lastName.name = "Example";
    };

    return { title, firstName, lastName, fullName, test };
  },
});
</script>
