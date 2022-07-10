<template>
    <button class="calculator__key" v-on:click='selectNumber'>{{number}}</button>
</template>

<script>
export default {
    props: {
        number: String,
        action: Function,
    },
    methods: {
      selectNumber() {
        this.action(this.number);
      }
    }
}
</script>