list d'éléments

<template>
  <div>
    <h3>{{list.name}}</h3>
    <p> description: {{list.description}}</p>
    <p>créé le : {{list.creationDate}}</p>
    <p v-if="list.deletionDate != null">statut : supprimé le {{list.deletionDate}}</p>
    <p v-else>statut : En cours depuis {{list.creationDate}}</p>
    <div  class="list-control">
        <input 
        type="text" name="element" :data-pos="list.id" placeholder="Ajouter un élément à votre liste"
        @keypress.enter="addElementToList"
        >
        <button class="btn-restore-list" v-if="list.deletionDate != null" :data-pos="list.id" @click="restoreList(list)">Récupérer la list</button>
        <button v-else :data-pos="list.id" @click="deleteList">Supprimer</button>
    </div>
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
</template>

<script>
export default {
    props:["list"],
    emits:["addElement", "removeList", "changeElementStatus", "restoreList"],
    methods:{
      addElementToList(e){
        this.$emit("addElement", e);
      },
      deleteList(e){
        this.$emit("removeList", e);
      },
      restoreList(list){
          list.deletionDate = null;
          this.$emit("restoreList");
      },
      changeElementStatus(element){
        element.isCompleted = !element.isCompleted;
        this.$emit("changeElementStatus");
      }
    }
}
</script>

<style>
  h3{
    font-size: 2em;
    color: #42b983;
  }
  ul{
    padding: 0;
  }
  li{
    color: #fff;
    list-style: none;
    cursor: pointer;
  }
  .complete{
      text-decoration: line-through;
      color: rgb(128, 123, 123);
  }
  p{
      color: #fff;
  }
</style>