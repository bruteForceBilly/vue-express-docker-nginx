<template>
  <div class="hello">
    <h3>Counter: {{ counter }}</h3>
    <button @click="counter++">Increment</button>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0;
}

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
