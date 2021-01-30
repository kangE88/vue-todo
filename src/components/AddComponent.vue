<template>
<div>
  <div v-on:click="handleClick">Add {{ test }}</div>
  <div> my name is {{ upperTest }}</div>
</div>
</template>

<script>
export default {
    name: 'addComponent',
data() {
    return{
      test: 'test!!',
    };
  },
  methods: {
      handleClick(){
          this.test = 'testChanged';
      },
  },
  //
  computed: {
      /*
      upperTest (){
          return this.test.toUpperCase();
      }
      */
      upperTest: {
          get(){
              return this.test.toUpperCase();
          }
      }
  },
  watch: {
      test(){
        console.log("!!!!");
      }
  }
}
</script>

<style>

</style>