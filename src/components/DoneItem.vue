<template>
  <md-list-item class="list-complete-item" @click.self="doneCheck(item.id)" >
    <md-icon>check_circle</md-icon><span>{{ item.title }}</span>
  </md-list-item>
</template>
<script>
  export default {
    methods: {
    },
    props: {
      item: Object
    }
  }
</script>
