<template>
  <div>
    <div>counter: {{ counter }}</div>
    <button id="inc-btn" @click="inc()">Increment</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    inc() {
      return this.counter++;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #42b983;
  border: none;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  font-size: 17px;
  padding: 16px 31px;
  outline: none;
  text-decoration: none;
}
</style>
