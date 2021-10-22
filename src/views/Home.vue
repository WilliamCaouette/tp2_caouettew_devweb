<template>
  <div class="home">
    <left-nav-bar :lists="lists"></left-nav-bar>
    <div class="list-lists">
      <button  @click="toggleForm"> + Ajouter une Liste</button>
      <div :class="isFormShow ? 'show' :  'hidden'">
        <div>
          <label for="Name">Nom :</label>
          <input type="text" name="nom" id="name">
        </div>
        <div >
          <label for="description">Description :</label>
          <textarea style="resize:none" maxlength="35" name="description" id="description" cols="30" rows="10"></textarea>
        </div>
        <button @click="addList">Ajouter</button>
      </div>
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
  .hidden{
    display: none;
  }
</style>
<script>
import LeftNavBar from '../components/LeftNavBar.vue'

export default {
  name: 'Home',
  components: {
    LeftNavBar
  },
  beforeMount(){
    if(localStorage.getItem("savedList")){
      this.lists = JSON.parse(localStorage.getItem("savedList"));
    }
  },
  methods:{
    saveDatasInLocalStorage(){
      let stringnifyLists = JSON.stringify(this.nonDeletedLists);
      localStorage.setItem("savedList", stringnifyLists);
    },
    deleteList(list){
      list.deletionDate = this.currentDate;
      this.saveDatasInLocalStorage();
    },
    changeElementStatus(element){
      element.isCompleted = !element.isCompleted;
      this.saveDatasInLocalStorage();
    },
    addElementToList(e){
      this.lists[e.target.dataset.pos].elements.push(
        {
          id: this.lists[e.target.dataset.pos].elements.length,
          title: e.target.value,
          isCompleted:false
        }
      );
      e.target.value = "";
      this.saveDatasInLocalStorage();
    },
    toggleForm(){
      this.isFormShow = !this.isFormShow;
      document.querySelector("#name").value = "";
      document.querySelector("#description").value = "";

    },
    addList(){
      this.lists.push(
        {
          id: this.lists.length,
          name : document.querySelector("#name").value,
          description : document.querySelector("#description").value,
          deletionDate : null,
          elements : []
        } 
      )
      this.saveDatasInLocalStorage();
      this.toggleForm();

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
      isFormShow : false,
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
