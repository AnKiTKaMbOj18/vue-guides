<template>
  <div class="from-inline m-2">
    <h3>Sign Up</h3>
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
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
    </div>
    <br>
      <router-link to="/signin">Already a user? Sign In</router-link>
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
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
      .catch(error => {
        this.error= error
      })
    }
  }
}
</script>
