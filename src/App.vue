<template>
  <div class="w-full">
    <div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heroes {{ herosCount }}</h1>
    <ul>
      <li v-for="(name, index) in dcHeros" :key="name.name">
        <div>{{ name.name }} <button @click="removeHero(index)">X</button></div>
        <input type="" name="">
      </li>
    </ul>
    <form @submit.prevent="addHero">
        <input v-model="newHero" placeholder="Type your hero name" />
        <button type="submit">AddHero</button>
    </form>
  </div>
  </div>

</template>

<script>
  
  export default{

    data () {
      return {
        newHero: "",
        firstName: "Gbolagade",
        lastName: "Winner",
        dcHeros: [
          {name: 'supergirl'},
          {name: 'superman'}, 
          {name: 'arrow'}, 
          {name: 'bataman'}, 
          {name: 'flash'}
        ],
      }
    },

    methods: {
      addHero(){
        if(this.newHero !== ''){
          this.dcHeros.push({name: this.newHero});
          this.newHero=''
        }
      },

      removeHero(index){
        this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
      }
    },

    computed: {
      herosCount(){
        return this.dcHeros.length;
      }
    }



  }

</script>

<style type="text/css"></style>

