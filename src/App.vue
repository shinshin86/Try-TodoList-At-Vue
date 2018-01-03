<template>
  <div id="app">
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    AddTodo,
    TodoList
  }
}
</script>
