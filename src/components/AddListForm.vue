<template>
  <button class="btn-add"  @click="toggleForm"> + Ajouter une Liste</button>
  <div class="form" :class="isFormShow ? 'show' :  'hidden'">
    <h2 class="full-width">Ajouter une liste</h2>
    <div class="fields">
      <div class="field">
        <label for="Name">Nom :</label>
        <div>
          <input type="text" name="nom" id="name">
        </div>
      </div>
      <div class="field">
        <label for="description">Description :</label>
        <div>
          <textarea style="resize:none" maxlength="35" name="description" id="description" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
    <div class="img-choice">
      <h4>Choisissez le thème de votre liste :</h4>
      <div @click="changeTheme('purchase')"><label for="img-purchases">achats</label><input checked type="radio" name="img" id="img-purchases"></div>
      <div  @click="changeTheme('homework')"><label for="img-homework">devoirs</label><input type="radio" name="img" id="img-homework"></div>
      <div  @click="changeTheme('task')"><label for="img-task">tâches</label><input type="radio" name="img" id="img-task"></div>
    </div>
    <button class="btn-restore-list" @click="addList">Ajouter la liste</button>
  </div>
</template>
<style scoped>

  .form{
    padding: 5%;
    background-color: #293544;
    margin-top: 15px;
    border-radius: 5px;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    border: #42b983 3px solid;
  }
  h2{
    font-size: 2em;
  }
  .fields{
    flex-basis: 50%;
  }
  .img-choice{
    flex-basis: 50%;
  }
  .full-width{
    flex-basis: 100%;
  }
  .field{
    margin-top: 8px;
  }
  .hidden{
    display: none;
  }
</style>
<script>
export default {
    emits:["addList"],
    methods:{
        addList(){
            this.$emit("addList", this.theme);
            this.toggleForm();
        },
        toggleForm(){
            this.isFormShow = !this.isFormShow;
            document.querySelector("#name").value = "";
            document.querySelector("#description").value = "";
        },
        changeTheme(theme){
          this.theme = theme
        }
    },
    data(){
        return{
            isFormShow : false,
            theme : "purchase"
        }
    }
}
</script>

