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
  props:["lists"],
  data(){ 
    return {
      lists : [
        {
          id:0,
          name: "lire",
          description : "exemple d'utilisation de l'application",
          deletionDate : null,
          elements:[
            {
              title: "livre 1",
              isCompleted: false
            },
            {
              title: "livre 2",
              isCompleted: false
            },
            {
              title: "livre 3",
              isCompleted: false
            }
          ]
        },
        {
          id:1,
          name: "tâches",
          description : "exemple d'utilisation de l'application",
          deletionDate : null,
          elements:[
            {
              title: "lessive",
              isCompleted: false
            },
            {
              title: "vaissel",
              isCompleted: false
            },
            {
              title: "cuisine",
              isCompleted: false
            }
          ]
        },
        {
          id:2,
          name: "épicerie",
          description : "exemple d'utilisation de l'application",
          deletionDate : null,
          elements:[
            {
              title: "Lait",
              isCompleted: false
            },
            {
              title: "Pain",
              isCompleted: false
            },
            {
              title: "Beurre d'arachide",
              isCompleted: false
            }
          ]
        },
      ]

    }
    
  }
}
</script>
