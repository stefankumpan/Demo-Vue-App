<template>
  <header>
    <div class="container">
      <div class="site-brand">
        <router-link to="/" class="site-brand__name">Vue-Demo</router-link>
      </div>
      <nav>
        <ul class="site-nav-list">
          <li class="site-nav-list__item">
            <router-link to="/" class="site-nav-list__link">Home</router-link>
          </li>
          <li class="site-nav-list__item">
            <router-link :to="{ name: 'shop' }" class="site-nav-list__link"
              >Shop</router-link
            >
          </li>
          <li class="site-nav-list__item">
            <shopping-cart-link />
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCartLink from "./ShoppingCartLink.vue";

export default defineComponent({
  components: { ShoppingCartLink },
});
</script>

<style lang="scss">
header {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  padding: 1rem;
  background-color: var(--secondary);
  box-shadow: var(--box_Shadow);
}
.site-brand__name {
  padding: 0;
  margin: 0;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: monospace;
  color: var(--primary);
  border: none;
  text-decoration: none;
  &.router-link-active {
    border-bottom: none;
  }
  &:hover {
    opacity: 0.5;
  }
}

.site-nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}
.site-nav-list__link {
  padding: 0 0.4rem 0.4rem;
  margin: 0 0.4rem;
  text-decoration: none;
  color: var(--white);
  font-size: 1.3rem;
  stroke: var(--white);
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    color: var(--primary);
    fill: var(--primary);
    stroke: var(--primary);
  }
  &.router-link-active {
    border-bottom: 0.2rem solid var(--primary);
  }
}

main {
  padding: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
