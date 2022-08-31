<template>
   <div class="menu">
      <div class="menu__links">
         <router-link tag="div" :to="'/'" class="menu__link">Home</router-link>
         <router-link tag="div" :to="'/form'" class="menu__link">Add</router-link>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   }
}
</script>