<template>
  <div class="from-inline m-2">
    <h3>Sign In</h3>
    <div class="form-group">
      <label for="">Email: </label>
      <input
        type="text"
        placeholder=""
        class="form-control mb-2"
        v-model="email"
      >
      <label for="">Password: </label>
      <input
        type="password"
        placeholder=""
        class="form-control mb-2"
        v-model="password"
      >
      <button class="btn btn-primary" @click="signIn">Sign In</button>
    </div>
    <br>
     <router-link to="/signup">Not a user? Sign Up</router-link>
    <br>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp.js';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
      .catch(error => {
        this.error= error
      })
    }
  }
}
</script>
