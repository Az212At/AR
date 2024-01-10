<script>
import MyNotes from "@/MyNotes.vue";
import AppSlots from "@/AppSlots.vue";
import BlockContentOne from "@/BlockContentOne.vue";
import BlockContentTwo from "@/BlockContentTwo.vue";
import BlockContentThree from "@/BlockContentThree.vue";
import formsBlock from "@/formsBlock.vue"
import AppMessageOne from "@/AppMessageOne.vue";
import AppMessageTwo from "@/AppMessageTwo.vue";
import MessageMixin from "@/messageMixin";
  export default {
  mixins: [MessageMixin],
  computed: {
    changeComponent() {
      return 'BlockContent' + this.nameComponent
    }
  },
  data() {
    return {
      notes: [
          {
            task:'Почистить зубы',
            id: 1,
            time: "07:00",
            isOpen: false,
            wasTaskRead: 0
          },
        {
          task:'Покушать',
          id: 2,
          time: "08:00",
          isOpen: false,
          wasTaskRead: 0
        },
        {
          task:'Сходить на работу',
          id: 3,
          time: "09:00",
          isOpen: false,
          wasTaskRead: 0}
      ],
      nameComponent: 'One',
      isModal: false
    }
  },
  components: {
    AppMessageOne,
    AppMessageTwo,
    formsBlock,
    BlockContentThree,
    BlockContentTwo,
    BlockContentOne,
    MyNotes,
    AppSlots,
  },
  methods: {
    countTaskOpen(id) {
      const index = this.notes.find(task => task.id === id);
      index.wasTaskRead++;
    },
    closeModal() {
      this.isModal = false
    }
  },
  provide() {
    return {
      info: this.notes
    }
  }
}
</script>


<template>
  <div class="container-fluid3">
    <app-message-one
        message = "сообщения с компонента app-message-one" :isOpen = "isOpen"
        @close = "close"
    ></app-message-one>
  </div>
  <app-message-two></app-message-two>
  <div class="container-fluid2">
    <h1>App2</h1>
    <forms-block></forms-block>
  </div>
  <div class="container-fluid1">
    <h1>App1</h1>
<keep-alive>
  <component :is="changeComponent"></component>
</keep-alive>
    <button v-on:click="nameComponent = 'One'" class="btn btn-success">ONE</button>
    <hr/>
    <button v-on:click="nameComponent = 'Two'" class="btn btn-success">TWO</button>
    <hr/>
    <button v-on:click="nameComponent = 'Three'" class="btn btn-success">THREE</button>
  </div>
  <my-component />
  <my-notes
      v-for='note in notes'
      v-bind:key = "note"
      v-bind:task = "note.task"
      v-bind:time = "note.time"
      v-bind:id = "note.id"
      v-bind:isOpen = "note.isOpen"
      v-bind:wasTaskRead = "note.wasTaskRead"
      v-on:countTaskOpen="countTaskOpen"
  ></my-notes>
  <hr />
  <app-slots>
    <template v-slot="sloteProps">
    <p>{{sloteProps.i}}:{{sloteProps.item}}</p>
    </template>
  </app-slots>
<!--  <div class="app">-->
<!--    <form id="add-form">-->
<!--      <h4>Авторизация</h4>-->
<!--      <input-->
<!--          class="input"-->
<!--          type="email"-->
<!--          placeholder="Введите почту">-->
<!--      <input-->
<!--          class="input"-->
<!--          type="password"-->
<!--          minlength="8"-->
<!--          placeholder="Введите пароль">-->
<!--      <button class="btn" id="idBtn" >Войти</button>-->
<!--    </form>-->
<!--  </div>-->

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  align-self: flex-start;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

</style>