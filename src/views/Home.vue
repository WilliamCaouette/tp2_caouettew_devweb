<template>
  <div class="home">
    <left-nav-bar :lists="lists"></left-nav-bar>
    <div class="list-lists">
        <div v-for="list in nonDeletedLists" :key="list.id" class="list">
          <h3>{{list.name}}</h3>
          <p>{{list.description}}</p>
          <button @click="deleteList(list)">delete</button>
          <ul>
            <li v-for="element in list.elements" :key="element.id">
              <input v-if="element.isCompleted" checked type="checkbox" name="isCompleted" >
              <input v-else type="checkbox" name="isCompleted" >
              {{element.title}}
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import LeftNavBar from '../components/LeftNavBar.vue'

export default {
  name: 'Home',
  components: {
    LeftNavBar
  },
  methods:{
    deleteList(list){
      list.deletionDate = this.currentTime;
    }
  },
  computed:{
    nonDeletedLists(){
      return this.lists.filter((list)=>{
        return list.deletionDate == null;
      });
    },
    currentTime(){
      let now = new Date();
      return now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
    },
  },
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
              id:0,
              title: "livre 1",
              isCompleted: false
            },
            {
              id:1,
              title: "livre 2",
              isCompleted: false
            },
            {
              id:2,
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
              id:0,
              title: "lessive",
              isCompleted: false
            },
            {
              id:1,
              title: "vaissel",
              isCompleted: false
            },
            {id:2,
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
              id:0,
              title: "Lait",
              isCompleted: false
            },
            {
              id:1,
              title: "Pain",
              isCompleted: false
            },
            {
              id:2,
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
