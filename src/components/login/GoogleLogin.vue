<template>
  <section class="my-4 text-right">
    <button class="border px-2 rounded" @click="loginWithGoogle">Login With Google</button>
  </section>
</template>

<script>
import firebase from '../../utilities/firebase'
export default {
  methods: {
    loginWithGoogle() {

      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        console.log(user)
        this.$emit('close-google-login')
        // ...
      })
      // .catch((error) => {
      //   // Handle Errors here.
      //   // let errorCode = error.code;
      //   // let errorMessage = error.message;
      //   // The email of the user's account used.
      //   // let email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   // let credential = error.credential;
      //   // ...
      //   console.log(error)
      // });
    }
  }
}
</script>

<style>

</style>