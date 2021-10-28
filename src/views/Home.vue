<template>
  <div class="home">
    <div class="left-bar">
      <left-nav-bar @applyFilter="changeFilter" :filter="filter" :lists="lists"></left-nav-bar>
    </div>
    <div class="list-lists">
      <add-list-form @addList="addList"></add-list-form>
      <div v-if="filter == null || filter == ''">
        <div v-for="list in nonDeletedLists" :key="list.id" class="list">
          <list :list="list" @addElement="addElementToList" @removeList="deleteList" @changeElementStatus="saveDatasInLocalStorage"></list>
        </div>
      </div>
      <div v-else>
        <button class="btn-supprimer" @click="changeFilter('')">Retirer le Filtre</button>
        <div v-for="list in filteredList" :key="list.id" class="list">
          <list-detail  :list="list" @addElement="addElementToList" @removeList="deleteList" @changeElementStatus="saveDatasInLocalStorage" @restoreList="saveDatasInLocalStorage" ></list-detail>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap');

</style>
<script>
import AddListForm from '../components/AddListForm.vue';
import LeftNavBar from '../components/LeftNavBar.vue'
import List from '../components/List.vue';
import ListDetail from '../components/ListDetail.vue';

export default {
  name: 'Home',
  components: {
    LeftNavBar,
    AddListForm,
    List,
    ListDetail
  },
  beforeMount(){
    if(localStorage.getItem("savedList")){
      this.lists = JSON.parse(localStorage.getItem("savedList"));
    }
    else{
      this.saveDatasInLocalStorage();
    }
  },
  methods:{
    changeFilter(value){
      this.filter = value;
    },
    saveDatasInLocalStorage(){
      let stringnifyLists = JSON.stringify(this.lists);
      localStorage.setItem("savedList", stringnifyLists);
    },
    deleteList(e){
      this.lists[e.target.dataset.pos].deletionDate = this.currentDate;
      this.saveDatasInLocalStorage();
    },
    addElementToList(e){
      if(e.target.value != ""){
        this.lists[e.target.dataset.pos].elements.push(
        {
          id: this.lists[e.target.dataset.pos].elements.length,
          title: e.target.value,
          isCompleted:false
        }
      );
      e.target.value = "";
      this.saveDatasInLocalStorage();
      }
    },
    addList(theme){
      this.lists.push(
        {
          id: this.lists.length,
          name : document.querySelector("#name").value,
          description : document.querySelector("#description").value,
          creationDate : this.currentDate,
          deletionDate : null,
          img: `img/${theme}.png`,
          elements : []
        } 
      )
      this.saveDatasInLocalStorage();
    },
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
    filteredList(){
      return this.lists.filter((list)=>{
        return list.name.includes(this.filter);
      }); 
    },
  },
  data(){ 
    return {
      filter : "",
      lists : [
        {
          id:0,
          name: "lire",
          description : "exemple d'utilisation de l'application",
          deletionDate : null,
          creationDate : "2021-10-25",
          img: "img/homework.png",
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
          creationDate : "2021-10-25",
          img: "img/task.png",
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
          creationDate : "2021-10-25",
          img: "img/purchase.png",
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
        {
          id:3,
          name: "repas",
          description : "exemple d'utilisation de l'application",
          deletionDate : null,
          creationDate : "2021-10-25",
          img: "img/purchase.png",
          elements:[
            {
              id:0,
              title: "mac&cheese",
              isCompleted: false
            },
            {
              id:1,
              title: "Soupe au poulet",
              isCompleted: false
            },
            {
              id:2,
              title: "Steak Frite",
              isCompleted: false
            }
          ]
        },
        {
          id:4,
          name: "Devoirs à rendre",
          description : "exemple d'utilisation de l'application",
          deletionDate : null,
          creationDate : "2021-10-25",
          img: "img/task.png",
          elements:[
            {
              id:0,
              title: "Animation pour Éric",
              isCompleted: false
            },
            {
              id:1,
              title: "Site Web pour Stephane",
              isCompleted: false
            },
            {
              id:2,
              title: "Sons pour Marc",
              isCompleted: false
            }
          ]
        },
      ]

    }
    
  }
}
</script>
