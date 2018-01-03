<template>
  <li class="list-complete-item">
    <label>{{ item.title }}
      <input type="checkbox" @change.self="DELETE_CHECK" />
    </label>
  </li>
</template>

<script>
  import { DELETE_CHECK } from '../vuex/mutation-types'
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'DELETE_CHECK'
      ])
    },
    props: {
      item: Object
    }
  }
</script>
