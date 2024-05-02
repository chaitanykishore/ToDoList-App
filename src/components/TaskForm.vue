<!-- TaskForm.vue -->
<template>
  <div>
    <h2>Add New Task</h2>
    <form @submit.prevent="addTask">
      <label for="taskName">Task Name:</label>
      <input type="text" v-model="taskName" id="taskName">
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: ''
    };
  },
  methods: {
    addTask() {
      // Call your function to add a new task here using Axios
      // Example: axios.post('/tasks', { name: this.taskName })
      // After adding the task, you may want to refresh the task list
    }
  }
}
</script>
