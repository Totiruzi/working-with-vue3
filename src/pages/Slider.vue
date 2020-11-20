<template>
  <div class="relative flex flex-wrap w-full">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div :class="color" style="height:350px" v-if="currentSlide == index"></div>
      </transition>
    </div>
    <div class="w-full" style="height:340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div 
          class="w-4 h-4 m-2 rounded-full cursor-pointer shadow-md" 
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'" 
          v-for="(slider, index) in sliders" 
          :key="slider"
          @click="makeActive(index)"></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button class="px-2 rounded border" @click="isTitleShowing= !isTitleShowing" >Toggle Text</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ['bg-teal-600', 'bg-blue-600', 'bg-yellow-600'],
      interval: '',
      isTitleShowing: false
    }
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    console.log(this.currentSlide)
   this.interval = setInterval(() => this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1, 1000);
  },
  beforeUnmounted() {
    clearInterval(this.interval)
  }

}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 2s ease;
  }
  .fade-enter-from{
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>