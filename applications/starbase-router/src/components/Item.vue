<template>
  <div class="col-md-4 col-sm-12 col-xs-12" title="click to change item" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
        <div v-for="(value,key,index) in item" :key="index">
          <div v-if="index < 5">
            <strong>{{key}}</strong>: {{value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['passedItem','type'],
  data() {
    return {
      item: {}
    }
  },
  methods: {
    switchItem() {
      let randomId = Math.floor(Math.random()*63)+1;
      fetch(`https://swapi.dev/api/${this.type}/${randomId}`,{
         method: "GET"
        })
        .then(response => response.json())
        .then(data => this.item = data)
        .catch(error => console.log(error))
    }
  },
  created() {
    this.item = this.passedItem;
  }
}
</script>
