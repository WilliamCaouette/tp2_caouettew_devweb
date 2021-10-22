<template>
  <div class="nav-bar">
        <section class="top">
            <h1>MyLists</h1>
            <input type="text" placeholder="search" @input="search()" name="search" id="search">
        </section>
        <section class="middle">
            <h2>Mes Listes</h2>
            <h3 class="list-name" @click="changeListShow(list)" v-for="list in nonDeletedLists" :key="list.id" >{{list.name}}</h3>
        </section>
        <section>
            <h2>Autres</h2>
            <div id="nav"></div>
            <router-link to="/trashcan">Corbeille</router-link>
        <router-view/>
        </section>
  </div>
</template>

<script>
export default {
 props:["lists"],
 methods:{
     changeListShow(list){
         return;
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
        align-items: center;
    }
    .top{
        margin-top: 5%;
    }
</style>