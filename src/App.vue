<template>
  <div id="app">
    <todo-count></todo-count>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import TodoCount from './components/TodoCount.vue'

export default {
  components: {
    AddTodo,
    TodoList,
    TodoCount
  }
}
</script>
