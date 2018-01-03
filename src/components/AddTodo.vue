<template>
  <div>
    <input @change.self="CHANGE_TITLE($event.target.value)" type="text" id="add-todo-text">
    <i @click.self="ADD_TODO" class="">ADD</i>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { CHANGE_TITLE, ADD_TODO } from '../vuex/mutation-types'

  export default {
    methods: {
      ...mapActions ([
        CHANGE_TITLE, ADD_TODO
      ])
    }
  }
  </script>
