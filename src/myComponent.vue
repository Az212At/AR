<script>
export default{
    name: "myComponent",
  data() {
      return {
        counter: 10,
        clue: 'Введите, пожалуйста, текст',
        inputValue: "",
        notes: ['one', 'two', 'three']
      }
  },
  methods: {
      encrease() {
        this.counter = this.counter + 1;
      },
    addNewNote(){
      this.notes.push(event.target.value);
      this.inputValue="";
    },
    deleteNote(index){
      this.notes.splice(index, 1);
    }
  },
  computed: {
    calculateNotes(){
      return this.notes.length * 5;
    }
  },
  watch: {
    inputValue(value){
      console.log("value", value);
      if (value.length === 10){
        this.inputValue = 0
      }
    }
  }
};
</script>

<template>
    <div class="my-component">
      <h1>Счётчик: {{counter}}</h1>
      <button class="btn, btn-danger"
              v-on:click="counter--">
        Уменьшить
      </button>
      <button class="btn, btn-success"
              v-on:click="encrease">
        Увеличить
      </button>
      <hr />
      <input type="text"
             v-bind:placeholder="clue"
             v-model="inputValue"
             v-on:keypress.enter="addNewNote">
      <h2 v-bind:class="notes.length > 5 ? 'first' : 'second'">Значение инпута: {{inputValue}}</h2>
      <div v-if = "notes.length === 1">
        Сейчас одна заметка
        <ul class="list-group" v-bind:class="{yellow: true, green: notes.length > 5}">
          <li v-bind:class="['list-group-item', 'yellow', {green: notes.length > 5}]">
              v-for="(oneNote, index) in notes "
              v-bind:key="index">
            {{oneNote}}
            <br />
            <button class="btn btn-danger" v-on:click="deleteNote(index)">Удалить</button>
          </li>
        </ul>
      </div>
      <ul class="list-group"
          v-else-if="notes.length !==0">
        <li class="list-group-item" v-for="(oneNote, index) in notes"
            v-bind:key="index">
          {{oneNote}}
          <br />
          <button class="btn btn-danger" v-on:click="deleteNote(index)">Удалить</button>
        </li>
      </ul>
      <div v-else>Здесь заметок нет!</div>
    </div>
  <div>{{calculateNotes}}</div>
</template>

<style lang="scss" scoped>
.my-component {}
.first {
  background: rgb(30, 255, 0);
}
.second {
  background: rgb(255, 0, 76);
}
.yellow {
  background: rgb(255, 230, 0);
}
.green {
  background: rgb(43, 255, 0);
}
</style>