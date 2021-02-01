<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">ADD</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
            <!--
            <v-btn class="mx-2 addBtn" fab dark color="indigo">
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
            -->
        </span>
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
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }

        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
input {
    border-style: groove;
    width: 80%;
} 
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    margin: 0.5rem;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius:0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>