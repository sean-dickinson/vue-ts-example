<script setup lang="ts">
import { toRefs } from 'vue';

export interface Link {
  text?: string;
  href: string;
}

const props = defineProps<{
  links: Link[];
}>();

const { links } = toRefs(props); 

const renderDisplay = (link: Link) => link.text || link.href; 


</script>
<template>
  <div class="breadcrumbs">
    <a v-for="link of links" :key="link.href" :href="link.href">{{ renderDisplay(link) }}</a>
  </div>
</template>


<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  gap: 1em;
}

a:not(:last-child) {
  opacity: 0.5;

  &::after {
    content: "/";
    margin-left: 1em;
  }
}
</style>