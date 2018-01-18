<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Try Todo List</h1>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <router-link :to="'/'" tag="list-complete-item">HOME</router-link>
        </div>
        <div class="md-toolbar-container">
          <router-link :to="'/done'" tag="list-complete-item">DONE ITEMS</router-link>
        </div>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>
<script>
  export default {
    methods: {
      toggleLeftSidenav(){
        this.$refs.leftSidenav.toggle();
      }
    }
  }
</script>
