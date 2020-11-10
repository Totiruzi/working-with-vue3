<template>
<AppHeader />
<div class="w-full flex">
  <router-view></router-view>
<!--  <AzHeros /> -->
<Calendar />
</div>
</template>

<script>
import AppHeader from './components/AppHeader'
// import AzHeros from './components/AzHeroes'
import Calendar from './components/Calendar'
export default {
  name: 'App',
  components: {
    AppHeader,
    Calendar
  }, 
}
</script>

<style>
</style>
