<template>
  <AppHeader />
  <div class="w-full flex">
    <CalenderView />
  </div>

</template>

<script>
  import AppHeader from "./components/AppHeader";
  import CalenderView from "./components/CalenderView";
  export default{
    components: {
      AppHeader, 
      CalenderView
    },
  }

</script>

<style>
  
</style>

