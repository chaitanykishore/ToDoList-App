<template>
  <div class="container">
    <h1>Welcome to TaskTracker</h1>
    <div class="router-links">
      <router-link to="/login" class="router-link">Login</router-link>
      <router-link to="/signup" class="router-link">Signup</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.router-links {
  display: flex;
  justify-content: center;
}

.router-link {
  margin: 0 10px;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #333;
  color: #fff;
}
</style>
