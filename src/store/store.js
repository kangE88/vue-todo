/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        console.log("created");
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, todoItem) {
      //console.log('recived');
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      //로컬스토리지 데이터 갱신
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem.item));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});