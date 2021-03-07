<template>
 <div>
  <transition-group name="list" tag="p">
    <li v-for="(todoItem, index) in propsdata" :key="todoItem.item" class="shadow">
      <span>
        <i class="far fa-check-square checkBtn" :class="{ checkBtnCompleted: todoItem.completed }" @click="checkTodo(todoItem, index)">
          <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        </i>
      </span>
      <span class="removeBtn" @click="removeTodo(todoItem, index)">
        <i class="far fa-trash-alt"></i>
      </span>
    </li>
  </transition-group>
  
 </div>

</template>

<script>
export default {
  props : ['propsdata'],
  /*
  App.vue 로 이동하여 app.vue -> props로 받아옴 

  data(){
    return{
      todoItems: [],
    }
  },
  */
  methods: {
    removeTodo(todoItem, index){
      /*
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);

      refactoring App.vue
      */
      this.$emit('removeItem', todoItem, index);
    },
    checkTodo(todoItem, index){
      /*
      refactoring App.vue
      */
      //console.log(todoItem, index);
      //localStorage.getItem(index);
      this.$emit('checkTodo', todoItem, index);
    }
  },
}
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>