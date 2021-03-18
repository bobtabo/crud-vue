<template>
  <div id="app" class="container-fluid" style="margin-top: 0px; padding-left: 50px;padding-right: 50px;">
    <index />
  </div>
</template>

<script>
import Index from './components/index.vue';

export default {
  name: 'App',
  components: {
    Index
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
