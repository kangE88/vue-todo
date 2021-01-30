<template>
  <div>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">ADD</button>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function(){
            console.log(this.newTodoItem);
            //저장하는로직
            //저장 후 초기화
            //this.newTodoItem = '';
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.newTodoItem = '';
        }
    }
}
</script>

<style>

</style>