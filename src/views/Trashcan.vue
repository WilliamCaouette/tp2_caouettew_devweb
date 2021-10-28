<template>
    <div class="trashcan">
      <div class="left-bar">
        <left-nav-bar :lists="lists"></left-nav-bar>
      </div>
      <div class="list-lists">
        <h2>Corbeille</h2>
        <button class="btn-supprimer" @click="deleteHiddenLists">Vider la Corbeille</button>
        <div v-for="list in deletedLists" :key="list.id">
            <h3>{{list.name}}</h3>
            <button class="btn-restore-list" @click="restoreList(list)">Récupérer la list</button>
            <p>{{list.description}}</p>
            <ul>
                <li v-for="element in list.elements" :key="element.id">{{element.title}}</li>
            </ul>
        </div>
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
  h2{
    font-size: 3em;
    color: #42b983;
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
