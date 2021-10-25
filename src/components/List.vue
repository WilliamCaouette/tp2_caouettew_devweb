list d'éléments

<template>
  <div>
    <h3>{{list.name}}</h3>
    <input 
      type="text" name="element" :data-pos="list.id" placeholder="Ajouter un élément à votre liste"
      @keypress.enter="addElementToList"
    >
    <button :data-pos="list.id" @click="deleteList">Supprimer</button>
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

<style>

</style>