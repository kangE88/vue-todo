import Vue from 'vue'
import Vuex from 'vuex'
//module 1
//import * as getters from './getters'
//import * as mutations from './mutations'

//module 2
import todoApp from './modules/todoApp'

Vue.use(Vuex);

// const storage = {
//     fetch() {
//         const arr = [];
//         if(localStorage.length > 0){
//             for (let i = 0; i < localStorage.length; i++) {
//                 if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     },
// }

export const store = new Vuex.Store({

  modules: {
    todoApp
  }

         //
        //  state: {
        //    todoItems: storage.fetch(),
        //  },
         //module1 getters.js로 이동
         //getters, //getters: getters, 
         
         /* 
         {
           storedTodoItems(state) {
             return state.todoItems;
           }
         },
         */

         //module 1 mutations.js 로 이동
         //mutations, //mutations: mutations,

         /* 
         {
           addOneItem(state, todoItem) {
             const obj = { completed: false, item: todoItem };
             localStorage.setItem(todoItem, JSON.stringify(obj));
             state.todoItems.push(obj);
           },
           removeOneItem(state, payload) {
             //console.log(JSON.stringify(payload));
             localStorage.removeItem(payload.todoItem.item);
             state.todoItems.splice(payload.index, 1);
           },
           toggleOneItem(state, payload) {
             //todoItem.completed = !todoItem.completed;
             state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
             localStorage.removeItem(payload.todoItem.item);
             localStorage.setItem(payload.todoItem.item, JSON.stringify(payload));
           },
           clearAllItems(state) {
             localStorage.clear();
             state.todoItems = [];
           },
         },
         */
       });

