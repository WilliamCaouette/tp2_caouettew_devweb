list d'éléments

<template>
  <h2>{{list.name}}</h2>
  <ul>
      <li v-for="element in list.elements" :key="element.id">{{element.name}}</li>
  </ul>
</template>

<script>
import { computed } from 'vue'
export default {
    props:["list"],
    methods:{

    },
    computed:{

    }
}
</script>

<style>

</style>