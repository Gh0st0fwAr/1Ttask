<template>
   <div class="wrapper">
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   components: {
      home: () => import('./components/Home.vue')
   }
}
</script>
