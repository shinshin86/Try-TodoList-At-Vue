<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Todo</div>
      </md-card-header>
      <md-card-content>
        <md-input-container>
          <md-input placeholder="New TODO"
                    @change.self.native="CHANGE_TITLE($event.target.value)"
                    @keyup.enter.native="ADD_TODO"
                    type="text"
                    id="add-todo-text"
                    :value="newItemTitle"></md-input>
        </md-input-container>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-raised md-primary" @click.self.native="ADD_TODO">ADD</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { CHANGE_TITLE, ADD_TODO } from '../store/mutation-types'

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
