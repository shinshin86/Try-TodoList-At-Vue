<template>
  <div>
    Your TODO count : {{ count }}
  </div>
</template>
<script>
  import { TODO_COUNT } from '../store/mutation-types'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'TODO_COUNT'
      ]),
    },
    computed: {
      ...mapGetters(['count'])
    }
  }
</script>
