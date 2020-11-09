<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Az Heros {{herosCount}}</h1>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in azHeros" :key="hero.name">
        <div>{{hero.name}}</div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded" v-model="newHero" placeholder="Type Hero Name Here" />
      <button class="border rounded bg-gradient-to-r from-blue-700 to-purple-500 text-orange-400" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      azHeros: [
        {name: 'Rosy'},
        {name: 'Papi'},
        {name: 'Kes'},
        {name: 'Chris'},
        {name: 'Nuel'},
      ]
    }
  },
  computed: {
    herosCount() {
      return this.azHeros.length
    },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.azHeros.unshift({name: this.newHero})
        this.newHero = '';
      }
    },
    remove(index) {
      this.azHeros = this.azHeros.filter((hero, i) => i != index)
    },
  },
}
</script>

<style>

</style>