<script>
import AppMessageOne from "@/AppMessageOne.vue";
import messageMixin from "@/messageMixin";

export default{
  mixins: [messageMixin],
  components: {
    AppMessageOne
  }
};
</script>

<template>
  <div class="container-fluid3">
    <app-message-one
        message = "сообщения с компонента app-message-two" :isOpen = "isOpen"
        @close = "close"
    ></app-message-one>
  </div>
</template>

<style>

</style>