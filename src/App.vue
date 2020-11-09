<template>
<AppHeader />
<div class="w-full flex"><AzHeros /></div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AzHeros from './components/AzHeroes'
export default {
  name: 'App',
  components: {
    AppHeader,
    AzHeros
  }, 
}
</script>

<style>
</style>
