<template>
  <div class="">
    <h4>Add an event <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label for="">Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label for="">Description</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label for="">Date</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label for="">location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from '../firebaseApp.js';
export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: ''
      },
      showForm: false,
    }
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      console.log(this.event);
      eventsRef.push(this.event)
      .catch(error => console.log(error))
    }
  }
}
</script>
