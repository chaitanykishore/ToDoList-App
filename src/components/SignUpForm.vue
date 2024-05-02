<!-- Signup.vue -->
<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username">
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password">
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" id="confirmPassword">
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    signup() {
      // Call your signup function here using Axios
      // Example: axios.post('/signup', { username: this.username, password: this.password })
    }
  }
}
</script>
