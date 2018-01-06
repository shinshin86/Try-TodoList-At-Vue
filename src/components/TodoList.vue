<template>
<div class="page-content">
  <transition-group name="list-complete" tag="ul">
    <todo-item
      v-for='item in items'
      :key='item.id'
      :item='item'>
    </todo-item>
  </transition-group>
  <button @click.self="DELETE_TODO">Delete Checked Item</button><br>
  <button @click.self="LOAD_TODO">LOAD BTN</button>
</div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import { mapGetters, mapActions } from 'vuex'
import { LOAD_TODO } from '../vuex/mutation-types'

export default {
  created() {
    this.LOAD_TODO()
  },
  computed: {
    ...mapGetters(['items'])
  },
  components: {
    TodoItem
  },
  methods: {
    ...mapActions([ 'LOAD_TODO' ])
  }
}
</script>
