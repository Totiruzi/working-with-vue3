<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="my-5 text-2xl">Reusable Modal</h1>
      <Modal v-if="isModal1Open" @close-modal="isModal1Open = false"> 
        <template v-slot:title>
          Model 1
        </template>
        <template v-slot:body>
          <p>This should be main content!!!</p>
          <p>This should be main content!!!</p>
          <p>This should be main content!!!</p>
        </template>
      </Modal>
      <button class="border rounded px-2 mx-4 bg-purple-500 text-white" @click="isModal1Open = true">Modal 1</button>

      <Modal v-if="isModal2Open" @close-modal="isModal2Open = false"> 
        <template v-slot:title>
          Model 2
        </template>
        <template v-slot:body>
          <p>This should be main content!!!</p>
          <p>This should be main content!!!</p>
          <p>This should be main content!!!</p>
        </template>
      </Modal>
      <button class="border rounded px-2 mx-4 bg-purple-500 text-white" @click="isModal2Open = true">Modal 2 </button>
    </div>
  </section>
</template>

<script>
import Modal from '../components/Modal';
import { ref } from 'vue'
export default {
  components: {Modal},
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false)

    return { isModal1Open, isModal2Open}
  }

}
</script>

<style>

</style>