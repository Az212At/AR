<script>
import MainForm1 from "@/components/MainForm1.vue";

export default {
  name: "MainLayout",
  components: { MainForm1 },
};
</script>

<template>
  <div class="main-layout">
    <MainForm1 />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
  background: yellow;
}
</style>
