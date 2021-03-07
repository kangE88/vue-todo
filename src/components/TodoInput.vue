<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer">
        <i class="fas fa-plus-square addBtn" @click="addTodo"></i>
    </span>

    <!-- app -->
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
        <!--
        slot을 이용하여 모달창의 헤더 바디 풋터를 custom 가능
        -->
        <h3 slot="header">경고 !</h3>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data(){
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                //this.$emit('이벤트 이름', 인자1, 인자2);
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
        Modal
    }
}
</script>

<style>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
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
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}

</style>