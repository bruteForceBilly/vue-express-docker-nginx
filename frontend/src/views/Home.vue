<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "Home",
  components: {
    Counter,
  },
};
</script>
