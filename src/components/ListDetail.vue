list d'éléments

<template>
  <div>
    <h3>{{list.name}}</h3>
    <p>{{list.description}}</p>
    <p>créé le : {{list.creationDate}}</p>
    <p v-if="list.deletionsDate != null">statut : supprimé le {{list.deletionDate}}</p>
    <p v-else>statut : En cours depuis {{list.creationDate}}</p>
    <input 
      type="text" name="element" :data-pos="list.id" placeholder="Ajouter un élément à votre liste"
      @keypress.enter="addElementToList"
    >
    <button v-if="list.deletionsDate != null" :data-pos="list.id" @click="restoreList(list)">Récupérer la list</button>
    <button v-else :data-pos="list.id" @click="deleteList">Supprimer</button>
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
      restoreList(list){
          list.deletionDate = null;
          this.saveDatasInLocalStorage();
      },
      changeElementStatus(element){
        element.isCompleted = !element.isCompleted;
        this.$emit("changeElementStatus");
      },
    }
}
</script>

<style>

</style>