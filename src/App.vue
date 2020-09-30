<template>
  <div id="app">
    <first></first>
    <router-view></router-view>
    <last></last>
  </div>
</template>


<script>
import top from './components/views/header'
import bottom from './components/views/footer'



export default {
  name: 'App',
  components: {
      first:top,
      last:bottom
  },
  
}
</script>

<style>
#app{}
</style>
