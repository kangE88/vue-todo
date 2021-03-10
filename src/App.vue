<template>
  <div id="app">
    <TodoHeader/>
    <!-- Vuex 를 대입하여 state에 삽입
      <TodoInput @addTodoItem="addOneItem"/> -->
    <TodoInput/>
    <!-- <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @checkTodo="toggleOneItem"/> -->
    <TodoList/>
    <!-- <TodoFooter @clearAll="clearAllItems"/> -->
    <TodoFooter/>
  </div>  
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  // data() {
  //   return {
  //     todoItems: [],
  //   }
  // },
  //methods: {
    // vuex 도입에 따른 store.js mutations에서 진행되도록 수정
    // addOneItem(todoItem){
    //   const obj = { completed: false, item: todoItem }
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index){
    //   //removeItem emit 으로 넘어온 데이터의 todoItem에 object로 담겨져 있으므로, todoItem이 아닌 todoItem.item을 remove 해야 함
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index){
    //   //todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  //},
  //store.js 로 이동
  // created(){
  //   if(localStorage.length > 0){
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
  //         //this.todoItems.push(localStorage.key(i));
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }
  // },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>