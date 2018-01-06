<template>
  <div>
    <input @change.self="CHANGE_TITLE($event.target.value)" @keyup.enter="ADD_TODO" type="text" id="add-todo-text" :value="newItemTitle" >
    <i @click.self="ADD_TODO" class="">ADD</i>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { CHANGE_TITLE, ADD_TODO } from '../vuex/mutation-types'

  export default {
    methods: {
      ...mapActions ([
        CHANGE_TITLE, ADD_TODO
      ])
    },
    computed: {
      ...mapGetters([
        'newItemTitle'
      ])
    }
  }
  </script>
