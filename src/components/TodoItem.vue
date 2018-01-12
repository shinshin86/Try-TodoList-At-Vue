<template>
  <md-list-item class="list-complete-item" @click.self="doneCheck(item.id)" >
    <md-icon>done</md-icon><span>{{ item.title }}</span>
  </md-list-item>
</template>
<script>
  import { DONE_CHECK, LOAD_TODO } from '../vuex/mutation-types'
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'DONE_CHECK'
      ]),
      doneCheck(id) {
        this.$store.dispatch('DONE_CHECK', id);
        this.$store.dispatch('LOAD_TODO');
      }
    },
    props: {
      item: Object
    }
  }
</script>
