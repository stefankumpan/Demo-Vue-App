<template>
  <button class="add-to-cart-btn">
    <span>{{ formattedPrice }}</span>
    <TagIcon />
  </button>
</template>

<script lang="ts">
import { formatToEuro } from "@/util/helper";
import { defineComponent } from "vue";
import TagIcon from "../icons/TagIcon.vue";

export default defineComponent({
  components: {
    TagIcon,
  },
  props: ["price"],
  setup(props) {
    const formattedPrice = formatToEuro(props.price);
    return {
      formattedPrice,
    };
  },
});
</script>

<style lang="scss">
.add-to-cart-btn {
  display: block;
  margin: 0 auto;
  width: 80%;
  padding: 0.5rem 1.5rem;
  border-radius: var(--default-border-radius);
  border: none;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--white);
  fill: var(--white);
  cursor: pointer;
  transition: all 300ms;
  svg {
    margin-left: 1rem;
  }

  &:hover {
    background-color: var(--primary);
    transform: scale(1.2);
  }
}
</style>
