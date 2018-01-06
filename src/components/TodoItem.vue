<template>
  <li class="list-complete-item">
    <label>{{ item.title }}
      <input type="checkbox" @change.self="doneCheck(item.id)" />
    </label>
  </li>
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
