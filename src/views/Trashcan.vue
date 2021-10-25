<template>
    <div class="trashcan">
        <left-nav-bar :lists="lists"></left-nav-bar>
        <h2>Corbeille</h2>
        <button @click="deleteHiddenLists">Vider la Corbeille</button>
        <div v-for="list in deletedLists" :key="list.id">
            <h3>{{list.name}}</h3>
            <p>{{list.description}}</p>
            <button @click="restoreList(list)">Récupérer la list</button>
            <ul>
                <li v-for="element in list.elements" :key="element.id">{{element.title}}</li>
            </ul>
        </div>
    </div>
</template>
<style>
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
  name: 'trashcan',
  components: {
    LeftNavBar
  },
  beforeMount(){
    this.lists = JSON.parse(localStorage.getItem("savedList"));
  },
  methods:{
      deleteHiddenLists(){
        let stringnifyLists = JSON.stringify(this.nonDeletedLists);
        localStorage.setItem("savedList", stringnifyLists);
        this.refreshLists();
      },
      refreshLists(){
        this.lists = JSON.parse(localStorage.getItem("savedList"));
      },
      restoreList(list){
          list.deletionDate = null;
          this.saveDatasInLocalStorage();
      },
      saveDatasInLocalStorage(){
      let stringnifyLists = JSON.stringify(this.lists);
      localStorage.setItem("savedList", stringnifyLists);
    }
  },
  computed:{
    deletedLists(){
      return this.lists.filter((list)=>{
        return list.deletionDate != null;
      });
    },
    nonDeletedLists(){
      return this.lists.filter((list)=>{
        return list.deletionDate == null;
      });
    }
  },
  data(){ 
    return {
      lists: null
    }
    
  }
}
</script>
