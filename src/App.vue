<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-count></todo-count>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import TodoCount from './components/TodoCount.vue'

export default {
  components: {
    TodoHeader,
    AddTodo,
    TodoList,
    TodoCount
  }
}
</script>
