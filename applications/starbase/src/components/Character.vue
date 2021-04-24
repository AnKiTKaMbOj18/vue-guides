<template>
  <div class="col-md-4 col-sm-12 col-xs-12 mb-2" title="click to change character" @click="switchCharacter">
    <div class="character-card">
      <div class="card-block">
        <h4 class="card-title pt-2">{{character.name}}</h4>
        <p class="card-text">Height: {{character.height}}cm</p>
        <p class="card-text">Mass: {{character.mass}}kg</p>
        <p class="card-text">Hair Color: {{character.hair_color}}</p>
        <p class="card-text pb-2">Eye Color: {{character.eye_color}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    }
  },
  name: "Character",
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.dev/api/people/${id}`,{
        method: "GET"
      })
      .then(response => response.json())
      .then(data => this.character = data)
      .catch(error => console.log(error))
    },
    switchCharacter() {
      let randomId = Math.floor(Math.random()*83+1);
      this.fetchCharacter(randomId);
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
}
</script>
