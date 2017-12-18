const vm = new Vue({
  el: '#app',
  data: {
    items: [
    ],
    newItemTitle: ''
  },
  methods: {
    addTodo: function(newTitle) {
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo: function() {
      this.items = this.items.filter(function(item) {
        return item.isChecked === false;
      });
      this.saveTodo();
    },
    saveTodo: function() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    loadTodo: function() {
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items) {
        this.items = [];
      }
    },
  },
  mounted: function() {
    this.loadTodo();
  },
})
