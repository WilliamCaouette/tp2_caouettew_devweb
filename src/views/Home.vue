<template>
  <div class="home">
    <left-nav-bar :lists="lists"></left-nav-bar>
  </div>
</template>

<script>
import LeftNavBar from '../components/LeftNavBar.vue'

export default {
  name: 'Home',
  components: {
    LeftNavBar
  },
  data(){ 
    return {
      lists : [
        {
          id:0,
          name: "lire",
          description : "blablalblal",
        },
        {
          id:1,
          name: "lire",
          description : "blablalblal",
        },
        {
          id:2,
          name: "lire",
          description : "blablalblal",
        },
      ]

    }
    
  }
}
</script>
