<template>
<div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heroes {{ herosCount }}</h1>
    <ul>
      <li class="flex justify-between" v-for="(name, index) in dcHeros" :key="name.name">
        <div>{{ name.name }}</div>
        <button @click="removeHero(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
        <input class="border rounded" v-model="newHero" placeholder="Type your hero name" />
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">AddHero</button>
    </form>
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