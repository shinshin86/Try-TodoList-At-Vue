<template>
<div class="page-content">
  <transition-group name="list-complete" tag="ul">
    <todo-item
      v-for='item in items'
      :key='item.id'
      :item='item'>
    </todo-item>
  </transition-group>
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

<style>
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
