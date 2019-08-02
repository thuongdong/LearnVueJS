import Vue from 'vue';
import Vuex from 'vuex';
export const STORAGE_KEY = 'todos-vuejs'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo);
    },

    removeTodo (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },

    editTodo (state, { todo, text = todo.text, done = todo.done }) {
      todo.text = text
      todo.done = done
    }
  },
  actions: {
    addTodo ({ commit }, text) {
      commit('addTodo', {
        text,
      })
    },

    removeTodo({ commit }, todo) {
      commit('removeTodo', todo)
    },

    toggleTodo ({ commit }, todo) {
      commit('editTodo', { todo, done: !todo.done })
    },

    toggleAll ({ state, commit }, done) {
      state.todos.forEach((todo) => {
        commit('editTodo', { todo, done })
      })
    },

    clearCompleted ({ state, commit }) {
      state.todos.filter(todo => todo.done)
        .forEach(todo => {
          commit('removeTodo', todo)
        })
    }
  },
})
