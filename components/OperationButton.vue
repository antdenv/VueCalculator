<template>
    <button class="calculator__key calculator__key--operator" v-on:click="selectOperation">{{operation}}</button>
</template>

<script>
export default {
    props: {
        operation: String,
        action: Function,
    },
    methods: {
      selectOperation() {
        this.action(this.operation);
      }
    }
}
</script>