import { expect } from 'chai'
import store from '../src/store/index'
import {
  DONE_CHECK,
  CHANGE_TITLE,
  ADD_TODO,
  SAVE_TODO,
  LOAD_TODO,
  TODO_COUNT,
  LOAD_DONE_TODO,
} from '../src/store/mutation-types'

const dispatch = store.dispatch
const commit = store.commit
const getters = store.getters

describe('actions', () => {
  it('CHANGE_TITLE', () => {
    const state = { items: [
      {"title":"test1","isChecked":false,"id":1518342529193},
      {"title":"test2","isChecked":false,"id":1518342531429}],
      newItemTitle: "Test Title"}
      expect(state.newItemTitle).to.equal("Test Title")

      dispatch(CHANGE_TITLE, "Test Title 2")
      expect(getters.newItemTitle).to.equal("Test Title 2")
  })

  // use localStorage
  /*
  it('DONE_CHECK', () => {
  })
  it('ADD_TODO', () => {
  })
  it('LOAD_TODO', () => {
  })
  it('TODO_COUNT', () => {
  })
  it('LOAD_DONE_TODO',() => {
  })
  */
})

describe('mutations', () => {
  it('DONE_CHECK', () => {
    const state = { items: [
      {"title":"test1","isChecked":false,"id":1518342529193},
      {"title":"test2","isChecked":false,"id":1518342531429}],
      newItemTitle: "Test Title"}

    commit(DONE_CHECK,state)
    expect(state.items[0].title).to.equal("test1")
    expect(state.items[0].isChecked).to.equal(false)
    expect(state.items[0].id).to.equal(1518342529193)
    expect(state.items[1].title).to.equal("test2")
  })
  it('CHANGE_TITLE', () => {
    const state = { items: [
      {"title":"test1","isChecked":false,"id":1518342529193},
      {"title":"test2","isChecked":false,"id":1518342531429}],
      newItemTitle: "Test Title"}
    commit(CHANGE_TITLE, state)
    expect(state.newItemTitle).to.equal("Test Title")
  })
  it('ADD_TODO', () => {
    const state = { items : []}
    expect(state.items.length).to.equal(0)
    commit(ADD_TODO, state.items.push({"title":"test1","isChecked":false,"id":1518342529193}))
    expect(state.items.length).to.equal(1)
    expect(state.items[0].title).to.equal("test1")
    expect(state.items[0].isChecked).to.equal(false)
    expect(state.items[0].id).to.equal(1518342529193)
  })
  it('SAVE_TODO', () => {
    const state = { items : []}
    expect(state.items.length).to.equal(0)
    commit(SAVE_TODO, state.items.push({"title":"test1","isChecked":false,"id":1518342529193}))
    expect(state.items.length).to.equal(1)
    expect(state.items[0].title).to.equal("test1")
    expect(state.items[0].isChecked).to.equal(false)
    expect(state.items[0].id).to.equal(1518342529193)
  })
  it('LOAD_TODO', () => {
    const state = { items : []}
    expect(state.items.length).to.equal(0)
    commit(LOAD_TODO, state.items.push({"title":"test1","isChecked":false,"id":1518342529193}))
    expect(state.items.length).to.equal(1)
    expect(state.items[0].title).to.equal("test1")
    expect(state.items[0].isChecked).to.equal(false)
    expect(state.items[0].id).to.equal(1518342529193)
  })
  it('TODO_COUNT', () => {
    const state = { items : []}
    expect(state.items.length).to.equal(0)
    commit(TODO_COUNT, state.items.push({"title":"test1","isChecked":false,"id":1518342529193}))
    expect(state.items.length).to.equal(1)
    expect(state.items[0].title).to.equal("test1")
    expect(state.items[0].isChecked).to.equal(false)
    expect(state.items[0].id).to.equal(1518342529193)
  })
  it('LOAD_DONE_TODO',() => {
    const state = { items : []}
    expect(state.items.length).to.equal(0)
    commit(LOAD_DONE_TODO, state.items.push({"title":"test1","isChecked":false,"id":1518342529193}))
    expect(state.items.length).to.equal(1)
    expect(state.items[0].title).to.equal("test1")
    expect(state.items[0].isChecked).to.equal(false)
    expect(state.items[0].id).to.equal(1518342529193)
  })
})
