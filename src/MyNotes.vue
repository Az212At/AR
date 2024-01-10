<script>
import myThird from "@/myThird.vue";
export default {
  props: {
    task: {
      type: String,
      required: true,
      default: "Отсутствует значение",
    },
    time: {
      type: String,
      required: true,
      default: "Отсутствует значение",
    },
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    isOpen: {
      type: Boolean
    },
    wasTaskRead: {
      type: Number,
      default: 0,
    }
  },
      data() {
    return {
      isTaskOpen: this.isOpen
    }
  },
  methods: {
    openTask() {
      this.isTaskOpen = !this.isTaskOpen;
      if(this.isTaskOpen) {
        this.$emit("countTaskOpen", this.id)
      }
    }
  },
  components: {
    myThird
  }
};
</script>

<template>
  <my-third></my-third>
    <div >
      <h2 v-if="isTaskOpen"
      v-bind:class="wasTaskRead < 2 ? 'bg-success' : 'bg-danger'"
      >Задание №{{id}}: {{task}}</h2>
      <p>{{time}}</p>
      <button class="btn, btn-success" v-on:click="openTask">Задание прочитано</button>
      <strong>Прочитано: {{wasTaskRead}}</strong>
    </div>
</template>

<style>

</style>