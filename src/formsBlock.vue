<script>
export default{
  data() {
    return{
      inputOne: '',
      inputTwo: '',
      rest: [],
      agree: false,
      dish: null,
      country: "USA"
    }
  },
  methods: {
    formSubmit() {
      console.log('formSubmit', this.inputOne)
      console.log('formSubmit', this.inputTwo)
      console.log('inputRefTwo', this.$refs.inputRefTwo.value)
    },
    inputChangeOne(event) {
      console.log('event.target.value', event.target.value)
      this.inputOne = event.target.value
    },
    formSubmit2() {
      console.log('rest', this.rest)
      console.log('agree', this.agree)

    },
    formSubmit3() {
      console.log('dish', this.dish)
    },
    formSubmit4() {
      console.log("country", this.country)
    }
  }
};
</script>

<template>
  <form v-on:submit.prevent="formSubmit4">
    <select v-model="country">
      <option value="Sp">Spain</option>
      <option value="It">Italy</option>
      <option value="En">England</option>
      <option value="USA">United States of America</option>
    </select>
      <hr />
      <button type = "submit" class = "btn btn-success">Отправить</button>
  </form>
  <form v-on:submit.prevent="formSubmit3">
    <span>Что предпочитаете на ужин?</span>
    <br />
    <label><input class = "form-chek-input" type = "radio" value="krab" v-model="dish">Крабы</label>
    <br />
    <label><input class = "form-chek-input" type = "radio" value="rak" v-model="dish">Раки</label>
    <br />
    <label><input class = "form-chek-input" type = "radio" value="omar" v-model="dish">Омары</label>
    <br />
    <label><input class = "form-chek-input" type = "radio" value="krev" v-model="dish">Креветки</label>
    <hr />
    <button type = "submit" class = "btn btn-success">Отправить</button>
  </form>
  <form v-on:submit.prevent="formSubmit2">
    <strong>Согласны ли Вы с условиями регистрации?</strong>
    <br />
    <label>
      <input
          class="form-chek-input"
          type="checkbox"
          v-model = "agree"
      /> Да
    </label>
    <br />
    <strong>Где предпочитаете отдыхать?</strong>
    <br />
    <label>
      <input
          class="form-chek-input"
          type="checkbox"
          v-model = "rest"
          value="Cyprus"
      /> Кипр
    </label>
    <br />
    <label>
      <input
          class="form-chek-input"
          type="checkbox"
          v-model = "rest"
          value = "Israel"
      /> Израиль
    </label>
    <br />
    <label>
      <input
          class="form-chek-input"
          type="checkbox"
          v-model = "rest"
          value = "Greese"
      /> Греция
    </label>
    <br />
    <label>
      <input
          class="form-chek-input"
          type="checkbox"
          v-model = "rest"
          value = "Bulgaria"
      /> Болгария
    </label>
    <br />
    <hr />
    <button type="submit" class="btn btn-success">Отправить</button>
  </form>
    <form v-on:submit.prevent="formSubmit">
      <input
          type="text"
          class="form-control"
          v-bind:value="inputOne"
          v-on:input="inputChangeOne"
      >
      <hr/>
      <input
          type="text"
          class="form-control"
          v-model.trim="inputTwo"
          ref="inputRefTwo"
      >
      <br/>
      <hr/>
      <button type="submit" class="btn btn-success">Отправить</button>
    </form>
</template>

<style>

</style>