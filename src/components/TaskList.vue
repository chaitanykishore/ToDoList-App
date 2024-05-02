<!-- TaskList.vue -->
<template>
  <div>
    <h2>Task List</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [] // You'll populate this array with tasks from MongoDB
    };
  },
  created() {
    // Fetch tasks from MongoDB using Axios and update tasks array
    // Example: axios.get('/tasks').then(response => this.tasks = response.data)
  }
}
</script>
