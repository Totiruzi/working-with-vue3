<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-purple-600 text-orange-400 px-4 py-2">
    <router-link class="mx-2" v-for="list in navList" :key="list.to" :to="list.to">{{list.title}}</router-link> 
    <button class="mx-2" @click="logout" v-if="isLogedIn">Logout</button>
    <button class="mx-2" @click="$emit('open-login-modal')" v-else>Login</button>

  </nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
  props: {isLogedIn: {type: Boolean, required: true}},
  data() {
    return {
      navList: [
        {title: "Az Heros", to: "/az-heros"},
        {title: "Calendar", to: "/calendar"},
        {title: "Markdown", to: "/markdown"},
        {title: "Slider Carousel", to: "/slider"},
        {title: "Calculator", to: "/calculator"}
      ]
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then((res) => {
  // Sign-out successful.
  console.log(res)
}).catch((error) => {
  // An error happened.
  console.log(error)
});
    }
  }
}
</script>

<style>

</style>