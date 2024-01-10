<script>
export default{
  props: ['time'],
  inject: ['info']
};
</script>

<template>
  <h1>THIRD: {{time}}</h1>
  <p>{{info}}</p>
</template>

<style lang="scss" scoped>
.third {}
</style>