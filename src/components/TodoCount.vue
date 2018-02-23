<template>
  <md-card-header>
    <div class="md-title">
      Your TODO count : {{ count }}
    </div>
  </md-card-header>
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
