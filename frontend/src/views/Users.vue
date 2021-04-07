<template>
  <div class="users">
    <h1 >This is a list of users </h1>
    <ul v-if="users">
      <li v-for="(user, i) in users" :key="user + i">
        <h3> {{ user.name }} </h3>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "Users",
  data() {
    return {
      users: null,
    }
  },
  methods: {
    async getUsers() {
      const res = await fetch(process.env.VUE_APP_API_URL);
      const data = await res.json();
      this.users = data;
    }
  },
 created(){
   return this.getUsers()
 }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
