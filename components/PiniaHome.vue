<template>
  <section>
    <h1>This is Pinia home</h1>

    <hr>

    <!-- FORM -->
    <form @submit.prevent>
      <input type="text" v-model="usernameInput">
      <button @click="authStore.setUsername(usernameInput); authStore.increaseRandomCount()">Submit</button>
    </form>

    <!-- ACCESSING username IN STORE -->
    <h3>username: {{ username }}</h3>
    <h3>Modified Username: {{ modUsername }}</h3>
    <sup>(modified username powered by Pinia getters)</sup>

    <hr>

    <!-- ACCESSING randomCount IN STORE -->
    <p>Button clicked {{ randomCount }} times</p>
    <p>Button clicked in doubles = {{ doubleRandomCount }}  times</p>
    <sup>(button clicked in doubles powered by Pinia getters)</sup>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth'

const usernameInput = ref('')

const authStore = useAuthStore()
const { username, randomCount, modUsername, doubleRandomCount } = storeToRefs(authStore)
</script>

<style scoped>

</style>