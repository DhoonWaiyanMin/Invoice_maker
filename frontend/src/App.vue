<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1">
      <SideBar/>
    </div>
    <div class="col-span-5">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
export default {
  components: {
    NavBar, SideBar },
  
}
</script>

<style>

</style>