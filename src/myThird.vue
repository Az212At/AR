<script>
import {info} from "sass";

export default{
  methods: {
    info() {
      return info
    }
  },
  props: ['time'],
  inject: ['info']
};
</script>

<template>
  <h1>THIRD: {{time}}</h1>
  <ul>
    <li v-for="item in info" v-bind:key="item.id">{{item.task}}</li>
  </ul>
</template>

<style lang="scss" scoped>
.third {}
</style>