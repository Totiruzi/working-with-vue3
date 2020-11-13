<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-purple-600 text-orange-400 px-4 py-2">
    <router-link class="mx-2" v-for="list in navList" :key="list.to" :to="list.to">{{list.title}}</router-link> 
  </nav>
</template>

<script>
export default {

  data() {
    return {
      navList: [
        {title: "Az Heros", to: "/az-heros"},
        {title: "Calendar", to: "/calendar"},
        {title: "Markdown", to: "/markdown"}
      ]
    }
  }
}
</script>

<style>

</style>