<template>
  <div id="app" class="">
    <h3>Got jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">
      Add Ten Random Jokes
    </button>
    <button class="btn btn-primary" @click="addJoke">
      Add Random Joke
    </button>
    <br>
    <span v-for="(type, index) in types" :key="index">
      <input
        type="checkbox"
        :value="type"
        checked
        v-model="checkedTypes"
      >
      <label for="">{{type}}</label>&nbsp;
    </span>
    <br>
    <div class="row">
      <Joke
        v-for="(joke,index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :key="index"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke.vue';

export default {
  name: 'app',
  data() {
    return {
      types: ['general','knock-knock','programming'],
      checkedTypes: ['general','knock-knock','programming'],
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  },
}
</script>
