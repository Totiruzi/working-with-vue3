<template>
  <section @click="close" class="h-screen w-screen bg-gray-500 fixed top-0 left-0  opacity-50 z-20"></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
        <div class="border p-2">
          <h1 class="text-2xl">
            <slot name="title"></slot>
          </h1>
          <main>
            <slot name="body"></slot>
          </main>
        </div>
      </div>
    </div>
  </div>        
</template>

<script>
export default {
setup( _, {emit}) {
  const close = () => emit("close-modal");

  return { close}
}
}
</script>

<style>

</style>