<script setup lang="ts">
import Breadcrumbs, { type Link } from "./components/Breadcrumbs.vue";
import StatusDot from "./components/StatusDot.vue";

const links: Link[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

</script>

<template>
  <main>
    <h1>TS Demo</h1>
    <hr/>
    <section>
      <h2>Breadcrumbs Demo</h2>
      <Breadcrumbs :links="links"/>
    </section>
    <section>
      <h2>Dot Demo</h2>
      <div class="dots">
        <StatusDot status="success"/>
        <StatusDot status="warning"/>
        <StatusDot status="error"/>
      </div>
    </section>


  </main>
</template>

<style scoped>
section {
  margin: 2em 0;
}

.dots {
  display: flex;
  gap: 1em;
}
</style>
