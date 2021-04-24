<template>
  <div class="row">
    <Item
      v-for="(item,index) in items"
      :key="index"
      :passed-item="item"
      :type="type"
    />
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'Data',
  data() {
    return {
      type: this.$route.params.type,
      items: []
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = [];
      let initialIds = [1,13,14];
      this.type = this.$route.params.type;

      for(let i in initialIds) {
        let id = initialIds[i];
        fetch(`https://swapi.dev/api/${this.type}/${id}`,{
         method: "GET"
        })
        .then(response => response.json())
        .then(data => this.items.push(data))
        .catch(error => console.log(error))
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components: {
    Item,
  }
}
</script>
