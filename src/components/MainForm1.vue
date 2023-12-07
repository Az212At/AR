<script>
import ConditionsForEntry from "@/components/ConditionsForEntry.js";
  export default {
    name: "MainForm1",
    component : { ConditionsForEntry }
  };
</script>

<template>
  <form class="form-1">
    <p>
      <input type="text" name="login" placeholder="Логин">
    </p>
    <p class="field">
      <input type="password" name="password" placeholder="Пароль">
    </p>
    <p class="submit">
      <button id="button" type="submit" name="submit"></button>
    </p>
  </form>
</template>

<style lang="scss" scoped>
.form-1{
}
</style>