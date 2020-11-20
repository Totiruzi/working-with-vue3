<template>
    <section class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20" @click="close"></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
          <div class="border p-2">
            <h1 class="text-2xl text-center">Login</h1>
            <GoogleLogin @close-google-login="close" />
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label>Email or Username</label>
                <input class="rounded shadow p-2 w-full" placeholder="Enter your Email or Username" v-model="email" ref="emailRef">
              </div>
              <div class="my-4">
                <label>Password</label>
                <input type="password" class="rounded shadow p-2 w-full" placeholder="Enter your password" v-model="password">
              </div>
              <div class="my-4">
                <button class="w-full rounded shadow-md bg-gradient-to-r from-blue-800 to-purple-700 text-white p-2" type="submit">
                  <span v-if="!isLoading">Login</span>
                  <span v-else>hourglass</span>  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';
import GoogleLogin from '../components/login/GoogleLogin'
export default {
  components: {GoogleLogin},

  data() {
    return {
      email: 'chris@onowu.com',
      password: 'super7',
      isLoading: false
    }
  },
  methods: {
    submit() {
      this.isLoading = true
      firebase.auth()
      .signInWithEmailAndPassword(this.email, this.password )
      .then(() => {
        this.email= '';
        this.password= '';
        this.isLoading = false;
        this.close();
      })
      .catch(e => {
        console.log(e);
        this.isLoading = false;
      })
    },

    close() {
      this.$emit('close-login')
    }
  }, 

  mounted() {
    this.$refs.emailRef.focus()
  },

}
</script>

<style>

</style>