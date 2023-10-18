<script setup lang="ts">
import { computed } from "vue";

export type Status = "success" | "warning" | "error";

const props = defineProps<{ status: Status }>();


const variantClass = computed(() => {
  switch (props.status) {
    case "success":
      return "indicator-dot--green";
    case "warning":
      return "indicator-dot--yellow";
    case "error":
      return "indicator-dot--red";
  }
})
</script>
<template>
  <div
    class="indicator-dot"
    :class="variantClass"
  ></div>
</template>

<style scoped lang="scss">
.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--dot-color);

  &--green {
    --dot-color: var(--vt-c-green);
  }

  &--yellow {
    --dot-color: var(--vt-c-yellow);
  }

  &--red {
    --dot-color: var(--vt-c-red);
  }

}
</style>
