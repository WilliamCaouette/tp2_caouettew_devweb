list d'éléments tel que présenter sur la page d'accueil (N'INCLUE PAS LA PAGE CORBEILLE, parceque manque de temps)
gère les changement de statut des éléments et la suppression de la liste en elle même
pourrait être dissocier des éléments qui pourrait être un componnent à part entière
<template>
  <div>
    <h3><img :src="list.img" :alt="list.description"> {{list.name}}</h3>
    <div  class="list-control">
      <input
        type="text" name="element" :data-pos="list.id" placeholder="Ajouter un élément à votre liste"
        @keypress.enter="addElementToList"
      >
      <button :data-pos="list.id" @click="deleteList">Supprimer</button>
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
    emits:["addElement", "removeList", "changeElementStatus"],
    methods:{
      addElementToList(e){
        this.$emit("addElement", e);
      },
      deleteList(e){
        this.$emit("removeList", e);
      },
      changeElementStatus(element){
        element.isCompleted = !element.isCompleted;
        this.$emit("changeElementStatus");
      },
    }
}
</script>

<style scoped>
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
  img{
    width: 30px;
  }
</style>