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
      <input class="border rounded" v-model="newHero" placeholder="Type Hero Name Here" ref="newHeroRef"/>
      <button class="border rounded bg-gradient-to-r from-blue-700 to-purple-500 text-orange-400" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
export default {
  setup() {
    onMounted(() => {
      newHeroRef.value.focus()
    });

  const herosCount = computed({
      get: () => azHeros.value.length
  })

    const newHeroRef = ref('');
    const newHero = ref('');
    const azHeros = ref([
        {name: 'Rosy'},
        {name: 'Papi'},
        {name: 'Kes'},
        {name: 'Chris'},
        {name: 'Nuel'},
      ]);

    const remove = (index) => {
      azHeros.value = azHeros.value.filter((hero, i) => i != index)
    };
    
    const addHero = () => {
      if (newHero.value !== "") {
        azHeros.value.push({name: newHero.value})
        newHero.value = '';
      }
    };

      return {azHeros, newHero, remove, addHero, newHeroRef, herosCount}
  },
}
</script>

<style>

</style>