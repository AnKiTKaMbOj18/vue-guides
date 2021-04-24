<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="container">
      <div class="row">
        <Character
          v-for="(id,index) in initialIds"
          v-bind:key="index"
          :id="id" />
      </div>
    </div>
    <!-- <button class="btn btn-primary" @click="fetchCharacter">Fetch People</button> -->
  </div>
</template>

<script>
import Character from './components/Character.vue';

export default {
  name: 'app',
  data() {
    return {
      title: "Generate Your Team",
      initialIds: [1, 13, 14],
    }
  },
  methods: {
  },
  components: {
    Character
  }
}
</script>
