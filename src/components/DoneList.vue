<template>
  <div class="page-content">
    <md-card-header>
      <div class="md-title">Done Count : {{ doneCount }}</div>
    </md-card-header>
    <transition-group name="list-complete" tag="md-list">
      <todo-item
        v-for='item in items'
        :key='item.id'
        :item='item'>
      </todo-item>
    </transition-group>
  </div>
</template>
<script>
import TodoItem from './DoneItem.vue'
import { mapGetters, mapActions } from 'vuex'
import { LOAD_TODO } from '../store/mutation-types'

export default {
  created() {
    this.LOAD_DONE_TODO()
  },
  computed: {
    ...mapGetters(['items', 'doneCount'])
  },
  components: {
    TodoItem
  },
  methods: {
    ...mapActions([ 'LOAD_DONE_TODO' ])
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
