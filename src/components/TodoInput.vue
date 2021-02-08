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
<!-- 
        <button id="show-modal" @click="showModal = true">Show Modal</button> -->
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
            <!--
                you can use custom content here to overwrite
                default content
                -->
            <h3 slot="header">
                경고
                <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
            </h3>
            <div slot="body">등록할 일정을 입력하세요.</div>
            <div slot="footer">Copy right</div>
        </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return {
            newTodoItem: "",
            showModal : false
        }
    },
    methods: {
        addTodo(){
            console.log(this.newTodoItem);
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components: {
        Modal: Modal
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
.closeModalBtn {
    color : #42b983;
}
</style>