<template>
<AppHeader @open-login-modal="isLoginOpen = true" :isLogedIn = "isLogedIn"/>
<div class="w-full flex">
  <router-view></router-view>
</div>
<teleport to="body">
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
</teleport>
</template>

<script>
import AppHeader from './components/AppHeader'
import LoginModal from './components/LoginModal'
import firebase from './utilities/firebase'
export default {
  data() {
    return { isLoginOpen: false, isLogedIn: false, authUser: {} }
  },
  // name: 'App',
  components: {
    AppHeader,
    LoginModal
  }, 
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.isLogedIn = true;
    this.authUser = user
  } else {
    // No user is signed in.
    this.isLogedIn = false;
    this.authUser = {}
    console.log('No user!!!')
  }
});
  }
}
</script>

<style>
</style>
