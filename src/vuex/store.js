import Vue from 'vue';
import Vuex from 'vuex';
import {
  DELETE_CHECK,
  UPDATE_CHECK,
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

function deleteTodo(items) {
  deleteItems = items.filter(function(item) {
    return item.isChecked === false;
  });
  saveTodo(deleteItems);
}

function saveTodo(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

function loadTodo() {
  let items = JSON.parse( localStorage.getItem('items') );
  if( !items ) {
    items = [];
  }
  return items
}

const state = {
  items: [],
  newItemTitle: ''
}

const actions = {
  [DELETE_CHECK] ({ commit, state }) {
  },
  [UPDATE_CHECK]({ commit, state }) {
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
  [DELETE_CHECK](state, items) {
    state.items = items
  },
  [UPDATE_CHECK] (state, items) {
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
