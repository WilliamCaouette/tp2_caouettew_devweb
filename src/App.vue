<template>
  <router-view/>
</template>

<style>
  body{
    overflow: hidden;
    margin: 0%;
    padding: 0%;
  }
  *{
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
  h1{
    font-family: 'Pacifico', cursive;
    font-size: 3em;
    color: #42b983;
  }
  
  .home, .trashcan{
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;

  }
  .left-bar{
      flex-basis: 18%;
      display: flex;
      align-items: flex-start;
      padding: 3%;
      border-right: 1px #42b983 solid;
      background-color: #11161d;
      color: rgb(98, 138, 119);
  }
  .list-lists{
    padding: 5%;
    width: 100%;
    background-color: #171e27;
    overflow-y: scroll;
  }
  .btn-add{
    background-color: #42b983;
    padding: 1% 2%;
    color: #fff;
    border: #42b983 3px solid;
    border-radius: 3px;
    margin-left: 90%;
    transition: all 400ms ease;
    cursor: pointer;
  }
  .btn-add:hover{
    color: #42b983;
    background-color: #fff;
  }
  input[type=text]{
    padding: 1% 2%;
    border-radius: 10px;
  }
  .list-control{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .list-control input{
    flex-basis: 60%;
  }
  .list-control button, .btn-supprimer{
    background-color: #E63E3B;
    padding: 1% 2%;
    color: #fff;
    border: #E63E3B 3px solid;
    border-radius: 3px;
    transition: all 400ms ease;
    cursor: pointer;
  }
  .list-control button:hover, .btn-supprimer:hover{
    text-decoration: line-through;
  }
  .btn-restore-list{
    background-color: #42b983;
    padding: 1% 2%;
    border: #42b983 1px solid;
    border-radius: 3px;
    color: #fff;
    margin-left: 85%;
    transition: 500ms ease all;
    cursor: pointer;
  }
  .btn-restore-list:hover{
    color: #42b983;
    background-color: #fff;
  }
</style>
