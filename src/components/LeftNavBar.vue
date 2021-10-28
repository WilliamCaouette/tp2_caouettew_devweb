Barre de navigation sur le coté de l'Application gère en bonne partie les filtres et les liens
<template>
  <div class="nav-bar">
        <section class="top">
            <router-link to="/"><h1>MyLists</h1></router-link>
            <input @input="applyFilter" :value="filter" type="text" placeholder="Filtrer" name="search" id="search">
        </section>
        <section class="middle">
            <h2>Mes Listes</h2>
            <h3 class="list-name" @click="changeListShow(list)" v-for="list in nonDeletedLists" :key="list.id" >{{list.name}}</h3>
        </section>
        <section class="bottom">
            <h2>Utilitaires</h2>
            <div id="nav"></div>
            <router-link to="/trashcan" id="corbeille">Corbeille</router-link>
        <router-view/>
        </section>
  </div>
</template>

<script>
export default {
 props:["lists", "filter"],
 emits:["applyFilter"],
 methods:{

     /**
     * @author William Caouette
     * @description lance l'évènement pour appliquer un filtre quand l'utilisateur appuis sur le nom d'une liste pour voire son détail
     */
     changeListShow(list){
         document.querySelector("#search").value = list.name;
         this.$emit("applyFilter", document.querySelector("#search").value)
     },

     /**
     * @author William Caouette
     * @description Applique le filtre en fonction de ce qui est entrée dans le champ
     */
     applyFilter(e){
         this.$emit("applyFilter", e.target.value)
     }
 },
 computed:{
     /**
     * @author William Caouette
     * @description Filtre les listes pour obtenire celle qui ne sont pas supprimés
     * @returns liste des listes non-supprimés
     */
      nonDeletedLists(){
      return this.lists.filter((list)=>{
        return list.deletionDate == null;
      });
    }
 }

}
</script>

<style scoped>
    .nav-bar{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;

    }
    .top{
        margin-top: 5%;
    }
    .middle{
        margin-top:5vh;
    }
    .bottom{
        margin-top:5vh;
    }
    h3, #corbeille{
        color: rgb(98, 138, 119);
        cursor: pointer;
        transition: 500ms all ease;
        font-size: 1.1em;
    }
    h3:hover, #corbeille:hover{
        color: #42b983;
        transform: scale(1.3);
    }
    #search{
        padding: 4px 8px;
        width: 200px;
        
    }
    h2{
        color: #42b983;
        font-size: 1.5em;
    }
</style>