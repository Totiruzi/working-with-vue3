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
      <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
      <p class="text-center" style="width: 14.28%" v-for="num in daysInMonth()" :key="num" :class="currentDayClass(num)">{{num}}</p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 corder rounded" @click="prev">Prev</button>
      <button class="px-2 border rounded" @click="next">Next</button>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentDay: new Date().getUTCDay(),
        currentYear: new Date().getFullYear(),
        currentMont: new Date().getMonth(),
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    methods: {
      daysInMonth() {
      return new Date(this.currentYear, this.currentMont + 1, 0).getDate()
      },
      startDay() {
        return new Date(this.currentYear, this.currentMont, 1).getDay()
      },
      next() {
        if (this.currentMont === 11) {
          this.currentMont = 0;
          this.currentYear++;
        } else {
        this.currentMont++
        }
      },
      prev() {
        if (this.currentMont === 0) {
          this.currentMont = 11;
          this.currentYear--;
        } else {
        this.currentMont--
        }
      },
      currentDayClass(num) {
        const calendarFullDate = new Date(this.currentYear, this .currentMont, num).toDateString()
        const currentFullDate = new Date().toDateString()
        return calendarFullDate === currentFullDate ? 'text-orange-800' : ''
      }
    },
    computed: {
      currentMonthName() {
        return new Date(this.currentYear, this.currentMont).toLocaleString('default',{month: 'long'})
      }
    }
  }
</script>