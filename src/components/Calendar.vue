<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <section class="flex justify-between mx-2">
    <h2 class="font-bold">{{currentMonthName}}</h2>
    <h2 class="font-bold">{{currentYear}}</h2>
    </section>
    <section class="flex my-2">
      <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day">{{day}}</p>
    </section>
    <section class="flex flex-wrap my-2">
      <p class="text-center" style="width: 14.28%" v-for="num in daysInMonth(currentYear, currentMont)" :key="num">{{num}}</p>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
        currentMont: new Date().getMonth() + 1,
        currentMonthName: new Date().toLocaleString('default',{month: 'long'}),
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    methods: {
      daysInMonth(year, month) {
      return new Date(year, month, 0).getDate()
      },
      startDay() {
        return new Date(this.currentYear, this.currentMont - 1, 1).getDay()
      }
    }
  }
</script>