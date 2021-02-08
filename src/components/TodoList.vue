<template>
  <div>
      <!-- ul > li v-for="todoItem in todoItems" v-bind:key="todoItem"> -->
      <transition-group name="list" tag="p">
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
          <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span> 
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash"></i>
          </span>
        </li>
      </transition-group>

        <!-- <v-list v-for="todoItem in todoItems" :key="todoItem" class="shadow">
          {{ todoItem }}
        </v-list> -->
        <!--
        <v-card v-for="todoItem in todoItems" :key="todoItem" class="shadow">
          <v-list-item >
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="todoItem"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-card>
        -->
  </div>
</template>

<script>
export default {
  props:['propsdata'],
  methods: {
    removeTodo(todoItem, index){
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplet(todoItem, index){
      console.log(todoItem +" "+index);
      this.$emit('toggleItem', todoItem, index);

    }
  },


}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li{
    display:flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
    padding: 0 5px 0 0;
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
  .list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>