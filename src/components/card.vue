
<template>
   <div class="card">
      <div class="card__wrapper">
         <div class="card__user">
            <user-block :userId="userId"
                    :email="email ? email + 'mail.com' : email"
                    :title="title"></user-block>
         </div>
         <div :style="`background-image: url(https://picsum.photos/400/250)`" class="card__image">
         </div>
         <div v-if="body" class="card__text">
            {{ capitalizeText }}
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      userId: Number | String,
      title: String,
      email: Number | String,
      body: String
   },
   components: {
      userBlock: () => import('./userBlock.vue')
   },
   computed: {
      capitalizeText() {
         return this.body.charAt(0).toUpperCase() + this.body.slice(1)
      }
   }
}
</script>