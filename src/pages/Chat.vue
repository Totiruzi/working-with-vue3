<template>
  Chats
</template>

<script>
import { onMounted } from 'vue'
import firebase from '../utilities/firebase'
export default {
setup() {
  onMounted(async() => {
    const db = firebase.database();
    const collection = db.ref('chats')
    const data = await collection.once('value')
    console.log(data.val());
  
  })
}
}
</script>

<style>

</style>