<template>
  <div class="nav-bar">
        <section class="top">
            <router-link to="/"><h1>MyLists</h1></router-link>
            <input @input="applyFilter" type="text" placeholder="search" name="search" id="search">
        </section>
        <section class="middle">
            <h2>Mes Listes</h2>
            <h3 class="list-name" @click="changeListShow(list)" v-for="list in nonDeletedLists" :key="list.id" >{{list.name}}</h3>
        </section>
        <section class="bottom">
            <h2>Utilitaires</h2>
            <div id="nav"></div>
            <router-link to="/trashcan">Corbeille</router-link>
        <router-view/>
        </section>
  </div>
</template>

<script>
export default {
 props:["lists"],
 emits:["applyFilter"],
 methods:{
     changeListShow(list){
         document.querySelector("#search").value = list.name;
     },
     applyFilter(e){
         this.$emit("applyFilter", e.target.value)
     }
 },
 computed:{
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
        margin-top:15vh;
    }
    .bottom{
        margin-top:15vh;
    }
</style>