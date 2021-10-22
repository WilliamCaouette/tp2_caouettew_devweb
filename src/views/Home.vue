<template>
  <div class="home">
    <left-nav-bar :lists="lists"></left-nav-bar>
    <div class="list-lists">
        <div v-for="list in nonDeletedLists" :key="list.id" class="list">
          <h3>{{list.name}}</h3>
          <p>{{list.description}}</p>
          <input 
            type="text" name="element" :data-pos="list.id" placeholder="Ajouter un élément à votre liste"
            @keypress.enter="addElementToList"
          >
          <button @click="deleteList(list)">delete</button>
          <ul>
            <li
             v-for="element in list.elements" @click="changeElementStatus(element)"
             :class="element.isCompleted ? 'complete' :  ''" :key="element.id"
             >
              <input v-if="element.isCompleted" checked type="checkbox" name="isCompleted" >
              <input v-else type="checkbox" name="isCompleted" >
              {{element.title}}
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<style scoped>
  li{
    list-style: none;
    cursor: pointer;
  }
  .complete{
    text-decoration: line-through;
    color: rgb(128, 123, 123);
  }
</style>
<script>
import LeftNavBar from '../components/LeftNavBar.vue'

export default {
  name: 'Home',
  components: {
    LeftNavBar
  },
  methods:{
    deleteList(list){
      list.deletionDate = this.currentDate;
    },
    changeElementStatus(element){
      element.isCompleted = !element.isCompleted;
    },
    addElementToList(e){
      console.log(e.target.value)
      this.lists[e.target.dataset.pos].elements.push(
        {
          id: this.lists[e.target.dataset.pos].elements.length,
          title: e.target.value,
          isCompleted:false
        });
        e.target.value = "";
    }
  },
  computed:{
    nonDeletedLists(){
      return this.lists.filter((list)=>{
        return list.deletionDate == null;
      });
    },
    currentDate(){
      let now = new Date();
      return now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
    },
  },
  data(){ 
    return {
      filter : null,
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
              isCompleted: true
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
