import Vue from 'vue';
import Vuex from 'vuex';
import {
  DONE_CHECK,
  CHANGE_TITLE,
  ADD_TODO,
  DELETE_TODO,
  SAVE_TODO,
  LOAD_TODO
} from './mutation-types';

Vue.use(Vuex);

Vue.component('todo-item', {
  props: ['title', 'isChecked', 'id'],
  data: function() {
    return {
      childisChecked: this.isChecked
    };
  },
});

function addTodo(state) {
  let date = Date.now();
  state.items.push({
    title: state.newItemTitle,
    isChecked: false,
    id: date
  });
  saveTodo(state.items);
  changeTitle(state, '');
  return state
}

function changeTitle(state, title) {
  state.newItemTitle = title
  return state
}

function doneItemCount(items) {
  doneItems = items.filter(function(item) {
    return item.isChecked === false;
  });
  return doneItems.length
}

function doneCheck(items, id) {
  items.forEach(function(item) {
    if(item.id === id) {
      item.isChecked = true;
    }
  });
  saveTodo(items);
  return items;
}

function saveTodo(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

function loadTodo() {
  const items = JSON.parse( localStorage.getItem('items') );
  let loadItems = [];
  if( !items ) {
    loadItems = [];
  } else {
    loadItems = items.filter(function(item) {
      return item.isChecked === false;
    })
  }
  console.log("load item : ", loadItems);
  return loadItems;
}

const state = {
  items: [],
  newItemTitle: ''
}

const actions = {
  [DONE_CHECK] ({ commit, state }, id) {
    const items = JSON.parse( localStorage.getItem('items') );
    commit(DONE_CHECK, doneCheck(items, id))
  },
  [CHANGE_TITLE] ({ commit, state }, title ) {
    commit(CHANGE_TITLE, changeTitle(state, title))
  },
  [ADD_TODO] ({ commit, state }) {
    commit(ADD_TODO, addTodo(state))
  },
  [DELETE_TODO] ({ commit, state }) {
    commit(DELETE_TODO, deleteTodo())
  },
  [LOAD_TODO] ({ commit, state }) {
    commit(LOAD_TODO, loadTodo())
  }
}

const getters = {
  items: state => state.items,
  newItemTitle: state => state.newItemTitle
}

const mutations = {
  [DONE_CHECK] (items) {
    state.items = items
  },
  [CHANGE_TITLE] (state) {
    state = state
  },
  [ADD_TODO] (state) {
    state = state
  },
  [DELETE_TODO] (state, items ) {
    state.items = items
  },
  [SAVE_TODO] (state, items) {
    state.items = items
  },
  [LOAD_TODO] (state, items) {
    state.items = items
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
