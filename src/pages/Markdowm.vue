<template>
<div class="flex w-full flex-wrap">
  <h1 class="w-full text-center my-4 text-3xl">Markdown App</h1>
  <section class="flex w-10/12 h-screen m-auto">
    <article class="w-1/2 border">
      <textarea class="w-full h-full" :value="text" @input="update" ref="markedownTextAreaRef"></textarea>
    </article>
    <article class="w-1/2 border bg-gray-100 break-words"  v-html="markedText"></article>
  </section>
</div>
</template>

<script>
import marked from "marked";
import useDebounce from '../utilities/composition/useDebounce'
// import debounce from '../utilities/mixins/debounce'
export default {
  setup(){
  },
  data() {
    return {
      text: "" 
    }
  },

  mounted() {
      this.debounce = useDebounce()
    this.$refs.markedownTextAreaRef.focus()
  },

  computed: {
    markedText() {
      return marked(this.text)
    }
  },
  methods: {
    update(e) {
      const task = () =>  (this.text = e.target.value);
      this. debounce(task, 500)
    }
  }
}
</script>

<style>

</style>