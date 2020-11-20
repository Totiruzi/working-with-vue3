<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="my-5 text-2xl">Reusable Modal</h1>
      <Modal v-if="isModalOpen" @close-modal="isModalOpen = false"/>
    </div>
  </section>
</template>

<script>
import Modal from '../components/Modal';
import { ref } from 'vue'
export default {
  components: {Modal},
  setup() {
    const isModalOpen = ref(true)

    return { isModalOpen}
  }

}
</script>

<style>

</style>