<template>
   <div class="subwrapper">
      <menuApp></menuApp>
      <router-view @new-post="processPost"
                   :customPosts="customPosts"></router-view>
   </div>
</template>

<script>
export default {
   data() {
      return {
         customPosts: []
      }
   },
   methods: {
      processPost(post) {
         this.customPosts.push(post);
      }
   },
   components: {
      'menuApp': () => import('./menuApp')
   }
}
</script>
