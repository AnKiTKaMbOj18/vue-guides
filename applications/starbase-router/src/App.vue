<template>
  <div id="app">
    <h3>{{title}}</h3>
    <h4>
      <router-link class="link" to="/data/people">Meet the Characters</router-link> |
      <router-link class="link" to="/data/planets">Explore the Planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      title: "Starbase Router",
      initialIds: [1, 13, 14],
    }
  },
  methods: {
  },
}
</script>
