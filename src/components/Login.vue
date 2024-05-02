<!-- Login.vue -->
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username">
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Call your login function here using Axios
      // Example: axios.post('/login', { username: this.username, password: this.password })
    }
  }
}
</script>
