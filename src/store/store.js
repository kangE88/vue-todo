import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
         //
         state: {
           todoItems: storage.fetch(),
         },
         mutations: {
           addOneItem(state, todoItem) {
             const obj = { completed: false, item: todoItem };
             localStorage.setItem(todoItem, JSON.stringify(obj));
             state.todoItems.push(obj);
           },
           removeOneItem(state, { todoItem, index }) {
             localStorage.removeItem(todoItem.item);
             state.todoItems.splice(index, 1);
           },
           toggleOneItem(state, { todoItem, index }) {
             //todoItem.completed = !todoItem.completed;
             state.todoItems[index].completed = !state.todoItems[index].completed;
             localStorage.removeItem(todoItem.item);
             localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
           },
           clearAllItems(state) {
             localStorage.clear();
             state.todoItems = [];
           },
         },
       });

