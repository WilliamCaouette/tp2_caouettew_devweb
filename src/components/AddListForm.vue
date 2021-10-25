<template>
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
</template>

<script>
export default {
    emits:["addList"],
    methods:{
        addList(){
            this.$emit("addList");
            this.toggleForm();
        },
        toggleForm(){
            this.isFormShow = !this.isFormShow;
            document.querySelector("#name").value = "";
            document.querySelector("#description").value = "";
        },
    },
    data(){
        return{
            isFormShow : false,
        }
    }
}
</script>

<style>
  .hidden{
    display: none;
  }
</style>