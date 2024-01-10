<script>
export default{
    data(){
      return{
        slotsData: ["a", "b", "c", "d"]
      };
    }
};
</script>

<template>
    <div>
      <ul>
        <li v-for="(data, index) in slotsData" v-bind:key="data">
          <slot v-bind:item="data" v-bind:i="index"></slot>
        </li>
      </ul>
    </div>
</template>

<style lang="scss" scoped>
.app-slots {}
</style>