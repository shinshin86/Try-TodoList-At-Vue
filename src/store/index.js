import Vue from 'vue'
import Vuex from 'vuex'
import {
  DONE_CHECK,
  CHANGE_TITLE,
  ADD_TODO,
  SAVE_TODO,
  LOAD_TODO,
  TODO_COUNT,
  LOAD_DONE_TODO
} from './mutation-types'

Vue.use(Vuex)

function addTodo(state) {
  let date = Date.now()
  state.items.push({
    title: state.newItemTitle,
    isChecked: false,
    id: date
  })
  saveTodo(state.items)
  changeTitle(state, '')
  return state
}

function changeTitle(state, title) {
  state.newItemTitle = title
  return state
}

function doneCheck(items, id) {
  items.forEach(function(item) {
    if (item.id === id) {
      item.isChecked = true
    }
  })
  saveTodo(items)
  return items
}

function saveTodo(items) {
  localStorage.setItem('items', JSON.stringify(items))
}

function loadTodo(isChecked) {
  const items = JSON.parse(localStorage.getItem('items'))
  let loadItems = []
  if (!items) {
    loadItems = []
  } else {
    loadItems = items.filter(function(item) {
      return item.isChecked === isChecked
    })
  }
  return loadItems
}

const state = {
  items: [],
  newItemTitle: ''
}

const actions = {
  [DONE_CHECK]({ commit }, id) {
    const items = JSON.parse(localStorage.getItem('items'))
    commit(DONE_CHECK, doneCheck(items, id))
  },
  [CHANGE_TITLE]({ commit, state }, title) {
    commit(CHANGE_TITLE, changeTitle(state, title))
  },
  [ADD_TODO]({ commit, state }) {
    commit(ADD_TODO, addTodo(state))
  },
  [LOAD_TODO]({ commit }) {
    commit(LOAD_TODO, loadTodo(false))
  },
  [TODO_COUNT]({ commit }) {
    commit(TODO_COUNT, loadTodo().length)
  },
  [LOAD_DONE_TODO]({ commit }) {
    commit(LOAD_TODO, loadTodo(true))
  }
}

const getters = {
  items: state => state.items,
  newItemTitle: state => state.newItemTitle,
  count: state => state.items.length,
  doneCount: state => {
    const doneItem = state.items.filter(item => {
      if (item.isChecked === true) return true
    })
    return doneItem.length
  }
}

const mutations = {
  [DONE_CHECK](items) {
    state.items = items
  },
  [CHANGE_TITLE](state) {
    state
  },
  [ADD_TODO](state) {
    state
  },
  [SAVE_TODO](state, items) {
    state.items = items
  },
  [LOAD_TODO](state, items) {
    state.items = items
  },
  [TODO_COUNT](state, items) {
    state.items = items
  },
  [LOAD_DONE_TODO](state, items) {
    state.items = items
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
